import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPagesModule } from './top-pages/top-pages.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { TopPageController } from './top-page/top-page.controller';

@Module({
  imports: [AuthModule, TopPagesModule, ProductModule, ReviewModule],
  controllers: [AppController, TopPageController],
  providers: [AppService],
})
export class AppModule {}
