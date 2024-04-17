import { Injectable } from '@nestjs/common';
import { CreateWishListDto } from './dto/create-wish_list.dto';
import { UpdateWishListDto } from './dto/update-wish_list.dto';
import { WishList } from './entities/wish_list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { identity } from 'rxjs';

@Injectable()
export class WishListService {
  constructor(@InjectRepository(WishList) private wishListRepo:Repository<WishList>){}

  //Them
  async create(createWishListDto: CreateWishListDto) {
    await this.wishListRepo
    .createQueryBuilder()
    .insert()
    .into(WishList)
    .values({
      course: +createWishListDto.course_id as any,
      user: +createWishListDto.user_id as any
    })
    .execute() 
    return 'Thêm thành công';
  }

  async findAll(id:number) {
    return await this.wishListRepo.createQueryBuilder("wish_list")
    .innerJoinAndSelect("wish_list.user", "users")
    .innerJoinAndSelect("wish_list.course", "course")
    .where("wish_list.user = :id", { id })
    .getMany()

    // return await this.wishListRepo.find();
  }

  //Lay theo id cua wish_list
  async findOne(id: number) {
    return await this.wishListRepo.createQueryBuilder("wish_list")
    .innerJoinAndSelect("wish_list.user", "users")
    .innerJoinAndSelect("wish_list.course", "course")
    .where("wish_list.user = :id", { id })
    .getMany()
  }

  //Cap nhat
  async update(id: number, updateWishListDto: UpdateWishListDto) {
    await this.wishListRepo.update(id,{course: +updateWishListDto.course_id as any,user: +updateWishListDto.user_id as any})
    return `Cập nhật thành công`;
  }

  //Xoa
  async remove(id: number) {
    await this.wishListRepo.delete(id)
    return `Xoá thành công`;
  }
}
