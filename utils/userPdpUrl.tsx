export const returnGoodUrlPdpUser = (userPdpUrl: string) => {
    if (userPdpUrl.includes('googleusercontent')) {
        return userPdpUrl
    } else {
        return `${process.env.NEXT_PUBLIC_BACKEND_URL}${userPdpUrl}`
    }
}
