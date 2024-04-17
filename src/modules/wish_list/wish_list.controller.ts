import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WishListService } from './wish_list.service';
import { CreateWishListDto } from './dto/create-wish_list.dto';
import { UpdateWishListDto } from './dto/update-wish_list.dto';

@Controller('/api/v1/wish-list')
export class WishListController {
  constructor(private readonly wishListService: WishListService) {}

  //Them
  @Post()
  create(@Body() createWishListDto: CreateWishListDto) {
    return this.wishListService.create(createWishListDto);
  }

  //Lay theo user_id cua user
  @Get('/all/:id')
  findAll(@Param('id') id: string) {
    return this.wishListService.findAll(+id);
  }

  //Lay theo id cua wish_list
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishListService.findOne(+id);
  }

  //Cap nhat
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWishListDto: UpdateWishListDto) {
    return this.wishListService.update(+id, updateWishListDto);
  }

  //Xoa
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishListService.remove(+id);
  }
}
