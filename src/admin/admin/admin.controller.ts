import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { EmployeeForm } from './Employeeform.dto';
  import {EmployeeUpdateForm } from './employeeupdateform.dto';
  import { EmployeeService } from './Admin.service';
  
  @Controller('/Admin')
  export class EmployeeController {
    constructor(private EmployeeService: EmployeeService) {}
  
    @Get('/index')
    getEmployee(): any {
      return this.EmployeeService.getIndex();
    }
    
    @Get('/finduser/:id')
    getUserByID(@Param('id', ParseIntPipe) id: number): any {
      return this.EmployeeService.getUserByID(id);
    }
  
    @Get('/finduser')
    getUserByIDName(@Query() qry: any): any {
      return this.EmployeeService.getAllUser();
    }
    @Post('/insertuser')
  @UsePipes(new ValidationPipe())
    insertUser(@Body() mydto: EmployeeForm): any {
      return this.EmployeeService.insertUser(mydto);
    }
  
    @Put('/updateuser/')
    @UsePipes(new ValidationPipe())
    updateUser(@Body('name') name: string, @Body('id') id: number): any {
      return this.EmployeeService.updateUser(name, id);
    }
  
    @Put('/updateuser/:id')
    @UsePipes(new ValidationPipe())
    updateUserbyid(
      @Body() mydto: EmployeeUpdateForm,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.EmployeeService.updateUserbyid(mydto, id);
    }
  
    @Delete('/deleteuser/:id')
    deleteUserbyid(@Param('id', ParseIntPipe) id: number): any {
      return this.EmployeeService.deleteUserbyid(id);
     
    }
  }
  