# backendNode


# Recuperação de senha

**RF -> Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um e-mail com as instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF -> Requisitos não Funcionais**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN -> Regras de Negócios**

- O link enviado por e-mail para resetar senha, deve experiar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do Perfil

**RF -> Requisitos Funcionais**

- O usuário deve poder atualizar seu nome, e-mail e senha;


**RN -> Regras de Negócios**

- O usuário não pode altarar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confiramr a nova senha;

# Painel do prestador

**RF -> Requisitos Funcionais**

- O usuário deve poder listar seus agendamentos de um dia específco;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder vizualizar as notificações não lidas;

**RNF -> Requisitos não Funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN -> Regras de Negócios**

- A notificação deve ter um status de lida ou não-lida para que o restador possa controlar;

# Agendamento de serviços

**RF -> Requisitos Funcionais**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF -> Requisitos não Funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**RN -> Regras de Negócios**

- Cada egendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h e último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
