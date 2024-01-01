import { client } from "@/postmark";

export async function POST(request){
    const res = await request.json();
    const {subject, body} = res;
    
    client.sendEmail({
        "From": 'ryan@ryansolomon.io',
        "To": 'ryan@ryansolomon.io',
        "Subject": subject,
        "TextBody": body
    })

    return Response.json({res})
}