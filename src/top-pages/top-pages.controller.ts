import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopFindPageDto } from './dto/findTop-pages.dto';
import { TopPagesModel } from './top-pages.model';

@Controller('top-pages')
export class TopPagesController {
    @Post('create ')
    async create(@Body() dto: Omit<TopPagesModel, '_id'>) {

    }

    @Get(':id')
    async get(@Param(':id') id: string) {

    }

    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: TopPagesModel) {

    }

    @HttpCode(200)
    @Post('find')
    async find(@Body() dto: TopFindPageDto){

    }
}
