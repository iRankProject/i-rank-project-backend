import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

import { SignUpInput } from './dto/signup-input';
import { SignResponse } from './dto/sign-response';

@Resolver(() => SignResponse)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignResponse)
  signup(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authService.signup(signUpInput);
  }
}
