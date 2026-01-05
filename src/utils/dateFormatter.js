/**
 * Formatea fechas de experiencia profesional
 * @param {string} startDate - Fecha inicio "2021-02-01"
 * @param {string} endDate - Fecha fin "2022-07-31"
 * @param {number} isCurrent - 1 si es trabajo actual, 0 si no
 * @param {string} locale - 'en' o 'es'
 * @returns {string} "Feb 2021 - Jul 2022" o "Jun 2025 - Present"
 */
export function formatExperiencePeriod(startDate, endDate, isCurrent, locale = 'en') {
  try {
    const options = { month: 'short', year: 'numeric' };
    const formatter = new Intl.DateTimeFormat(locale, options);

    const start = formatter.format(new Date(startDate));

    if (isCurrent === 1) {
      const presentText = locale === 'es' ? 'Presente' : 'Present';
      return `${start} - ${presentText}`;
    }

    const end = formatter.format(new Date(endDate));
    return `${start} - ${end}`;
  } catch (error) {
    console.error('Date formatting error:', error);
    return 'Unknown Period';
  }
}
