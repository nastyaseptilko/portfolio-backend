import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot(),
    ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
