import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DbModule } from 'src/db/db.module';
import { AccountModule } from 'src/account/account.module';
import { BlockListModule } from 'src/block-list/block-list.module';

@Module({
  imports: [DbModule, AccountModule, BlockListModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
