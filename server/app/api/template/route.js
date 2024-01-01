import { client } from "@/postmark";

export async function POST(request){
    const res = await request.json();
    const {name, age} = res;
    
    client.sendEmailWithTemplate({
        "TemplateId": '33563134',
        "From": 'ryan@ryansolomon.io',
        "To": 'ryan@ryansolomon.io',
        "TemplateModel": {
            "name": name,
            "age": age
        }
    })

    return Response.json({res})
}