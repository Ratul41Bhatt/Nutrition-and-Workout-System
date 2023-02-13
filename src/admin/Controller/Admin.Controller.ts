import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query} from "@nestjs/common";
import { CreateForm } from "../DTO/create.dto";
import { AdminForm } from "src/admin/DTO/admin.dto";
import { AdminService } from "../services/admin/admin.service";
import { UsePipes } from "@nestjs/common/decorators";
import { ValidationPipe } from "@nestjs/common/pipes";

@Controller('/Admin')
export class AdminController {
    constructor(private AdminService: AdminService) {}

    @Get("/index")
    getAdmin():any {
        return this.AdminService.getIndex();
    }

    @Get("/nutritionistlist")
    getNutritionistList():any {
        return this.AdminService.getNutritionistList();
    }

    @Get("/trainerlist")
    getTrainerList():any {
        return this.AdminService.getTrainerList();
    }

    @Get("/findnutritionist")
    getNutritionist(@Query() qry:any): any {
        return this.AdminService.getNutritionist(qry);
    }

    @Get("/findtrainer")
    getTrainer(@Query() qry:any): any {
        return this.AdminService.getTrainer(qry);
    }

    @Post("/Adminreg")
    @UsePipes(new ValidationPipe())
    NewAdmin(@Body() mydto:AdminForm): any {
        return this.AdminService.NewAdmin(mydto);
    }

    @Put("/updateAdmin/:id")
    @UsePipes(new ValidationPipe())
    updateAdminbyId(
        @Body() mydto:CreateForm,
        @Param("id", ParseIntPipe) id:number
    ): any {
        return this.AdminService.updateAdminbyId(mydto,id);
    }

    @Delete("/deleteAdmin/:id")
    deleteAdminbyId(
        @Param("id", ParseIntPipe) id:number
    ): any {
        return this.AdminService.deleteAdminbyId(id);
    }

}
