const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER

export function getWhatsAppUrl(message) {
    if (!whatsappNumber) {
        throw new Error('WhatsApp number is missing from the environment variables.')
    }

    const encodedMessage = encodeURIComponent(message)

    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
}