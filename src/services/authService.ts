import * as jose from 'jose'

async function OpenSessionToken(token:string) {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_AUTH_SECRET)
    const { payload } = await jose.jwtVerify(token, secret)

    return payload
}

async function createSessionToken(payload = {}) {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_AUTH_SECRET)
    const session = await new jose.SignJWT(payload).setProtectedHeader({alg:'HS256'}).setExpirationTime('1h').sign(secret)
    const{exp} = await OpenSessionToken(session)

}