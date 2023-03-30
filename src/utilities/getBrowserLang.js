export function getBrowserLang() {
    const lng = navigator.language.split('-')[0]
    if (['es', 'en', 'fr'].includes(lng)) return lng
    return 'en'
}