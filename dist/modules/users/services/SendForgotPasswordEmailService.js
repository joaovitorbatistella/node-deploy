"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _path = _interopRequireDefault(require("path"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IMailProvider = _interopRequireDefault(require("../../../shared/container/providers/MailProvider/models/IMailProvider"));

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _IUserTokensRespository = _interopRequireDefault(require("../repositories/IUserTokensRespository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SendForgontEmailPassword = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('MailProvider')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('UserTokensRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IMailProvider.default === "undefined" ? Object : _IMailProvider.default, typeof _IUserTokensRespository.default === "undefined" ? Object : _IUserTokensRespository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class SendForgontEmailPassword {
  constructor(usersRepository, mailProvider, userTokensRepository) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
    this.userTokensRepository = userTokensRepository;
  }

  async execute({
    email
  }) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.default('User does not exists.');
    }

    const {
      token
    } = await this.userTokensRepository.generate(user.id);

    const forgotPasswordTemplate = _path.default.resolve(__dirname, '..', 'views', 'forgot_password.hbs');

    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email
      },
      subject: '[Gobarber] Recuperação de senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `${process.env.APP_WEB_URL}/reset-password?token=${token}`
        }
      }
    });
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = SendForgontEmailPassword;
exports.default = _default;