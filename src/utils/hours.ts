import { OpeningHourDay, siteConfig } from '../data/site';

export interface OpenStatus {
  isOpen: boolean;
  statusLabel: 'Jetzt geöffnet' | 'Geschlossen';
  detail: string;
  todaySchedule: OpeningHourDay | null;
  nextOpenDay?: string;
  nextOpenTime?: string;
}

/**
 * Ermittelt den aktuellen Öffnungsstatus in der Zeitzone Europe/Berlin
 */
export function getOpenStatus(nowDate = new Date()): OpenStatus {
  try {
    // Berlin Zeitstring formatieren um Zeitzoneneffekte bei Nutzern im Ausland abzufangen
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Berlin',
      hour12: false,
      weekday: 'narrow',
      hour: 'numeric',
      minute: 'numeric',
    });

    const parts = formatter.formatToParts(nowDate);
    let hour = 0;
    let minute = 0;

    for (const part of parts) {
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    // Ermittle den aktuellen Tag in Berlin (0 = Sonntag, 1 = Montag, ...)
    const dayFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Berlin',
      weekday: 'short',
    });
    const weekdayStr = dayFormatter.format(nowDate);
    const dayMap: Record<string, number> = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };
    const currentDayIndex = dayMap[weekdayStr] ?? nowDate.getDay();
    const currentMinutes = hour * 60 + minute;

    const hoursList = siteConfig.openingHours;
    const today = hoursList.find((h) => h.dayIndex === currentDayIndex) || null;

    if (!today || today.isClosed) {
      // Suche den nächsten offenen Tag
      const nextDay = findNextOpenDay(currentDayIndex, hoursList);
      return {
        isOpen: false,
        statusLabel: 'Geschlossen',
        detail: nextDay ? `Öffnet ${nextDay.dayName} um ${nextDay.open} Uhr` : 'Heute Ruhetag',
        todaySchedule: today,
      };
    }

    const [openH, openM] = today.open.split(':').map((v) => parseInt(v, 10));
    const [closeH, closeM] = today.close.split(':').map((v) => parseInt(v, 10));

    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      const remainingMinutes = closeMinutes - currentMinutes;
      const closingSoon = remainingMinutes <= 45;

      return {
        isOpen: true,
        statusLabel: 'Jetzt geöffnet',
        detail: closingSoon
          ? `Schließt bald (um ${today.close} Uhr)`
          : `Bis ${today.close} Uhr geöffnet`,
        todaySchedule: today,
      };
    } else if (currentMinutes < openMinutes) {
      return {
        isOpen: false,
        statusLabel: 'Geschlossen',
        detail: `Öffnet heute um ${today.open} Uhr`,
        todaySchedule: today,
      };
    } else {
      // Heute bereits geschlossen, finde den nächsten Tag
      const nextDay = findNextOpenDay(currentDayIndex, hoursList);
      return {
        isOpen: false,
        statusLabel: 'Geschlossen',
        detail: nextDay ? `Öffnet ${nextDay.dayName} um ${nextDay.open} Uhr` : 'Für heute geschlossen',
        todaySchedule: today,
      };
    }
  } catch (e) {
    // Fallback falls Zeitzonen-Parsing fehlschlägt
    return {
      isOpen: true,
      statusLabel: 'Jetzt geöffnet',
      detail: 'Täglich ab 12:00 Uhr für dich da',
      todaySchedule: siteConfig.openingHours[0],
    };
  }
}

function findNextOpenDay(currentDayIndex: number, hoursList: OpeningHourDay[]): OpeningHourDay | null {
  for (let offset = 1; offset <= 7; offset++) {
    const checkIndex = (currentDayIndex + offset) % 7;
    const found = hoursList.find((h) => h.dayIndex === checkIndex && !h.isClosed);
    if (found) {
      if (offset === 1) {
        return { ...found, dayName: 'morgen' };
      }
      return found;
    }
  }
  return null;
}
