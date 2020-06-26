interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'joaovitorbatistella@lostspace.dev',
      name: 'João Vítor Batistella',
    },
  },
} as IMailConfig;
