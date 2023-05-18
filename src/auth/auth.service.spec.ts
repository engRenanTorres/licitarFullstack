import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UsersService;
  let jwtService: JwtService;

  beforeEach(() => {
    userService = createMock<UsersService>();
    jwtService = createMock<JwtService>();
    authService = new AuthService(userService, jwtService);
  });

  describe('login', () => {
    it('should return a JWT token', async () => {
      const user: User = { id: 1, email: 'user@example.com', roles: ['admin'] };
      const token = 'generated-token';

      jwtService.sign.mockReturnValue(token);

      const result = await authService.login(user);

      expect(result).toEqual({ token });
      expect(jwtService.sign).toHaveBeenCalledWith(
        { sub: user.id, email: user.email, role: user.roles },
        {},
      );
    });
  });

  describe('validateUser', () => {
    it('should return the user if the email and password are valid', async () => {
      const email = 'user@example.com';
      const password = 'password';
      const user: User = {
        id: 1,
        email,
        password: 'hashed-password',
        roles: ['user'],
      };

      userService.findByEmail.mockResolvedValue(user);
      compareSync.mockReturnValue(true);

      const result = await authService.validateUser(email, password);

      expect(result).toEqual(user);
      expect(userService.findByEmail).toHaveBeenCalledWith(email);
      expect(compareSync).toHaveBeenCalledWith(password, user.password);
    });

    it('should return null if the email is not found', async () => {
      const email = 'nonexistent@example.com';
      const password = 'password';

      userService.findByEmail.mockResolvedValue(null);

      const result = await authService.validateUser(email, password);

      expect(result).toBeNull();
      expect(userService.findByEmail).toHaveBeenCalledWith(email);
      expect(compareSync).not.toHaveBeenCalled();
    });

    it('should return null if the password is invalid', async () => {
      const email = 'user@example.com';
      const password = 'invalid-password';
      const user: User = {
        id: 1,
        email,
        password: 'hashed-password',
        roles: ['user'],
      };

      userService.findByEmail.mockResolvedValue(user);
      compareSync.mockReturnValue(false);

      const result = await authService.validateUser(email, password);

      expect(result).toBeNull();
      expect(userService.findByEmail).toHaveBeenCalledWith(email);
      expect(compareSync).toHaveBeenCalledWith(password, user.password);
    });
  });
});
