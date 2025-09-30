import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'aaaeeeerara',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [],
  providers: [JwtService, AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
