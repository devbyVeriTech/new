// import { generateUsername } from "$lib/utils/utils.js";
import { redirect } from "@sveltejs/kit";
import { pb } from "$lib/pb";


export const actions = {
    sign: async ({request}) => {
        const body = Object.fromEntries(await request.formData())
        const passwordConfirm = body.password

        try {
            await pb.collection('users').create({passwordConfirm, ...body});
        } catch (e){
            console.error(e);
            throw e
        }

        throw redirect (303, '/login');
    }
}