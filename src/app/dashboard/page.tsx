import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server"

const  Page = () => {
    const {} = getKindeServerSession()
}

export default Page