import { Controller, Get} from "@nestjs/common";
import { UserService } from "../../services/user/user.service";

@Controller('/user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get("/index")
    getUser():any {
        return this.userService.getIndex();
    }
}
