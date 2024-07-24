import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(817, "Qual é a capital de Portugal?", [
    RespostaModel.errada('Porto'),
    RespostaModel.errada('Faro'),
    RespostaModel.errada('Coimbra'),
    RespostaModel.certa('Lisboa'),
  ]),
  new QuestaoModel(675, "Em que ano Portugal descobriu o Brasil?", [
    RespostaModel.errada('1400'),
    RespostaModel.errada('1492'),
    RespostaModel.errada('1600'),
    RespostaModel.certa('1500'),
  ]),
  new QuestaoModel(275, "Qual é o rio mais longo de Portugal?", [
    RespostaModel.errada('Douro'),
    RespostaModel.errada('Guadiana'),
    RespostaModel.errada('Mondego'),
    RespostaModel.certa('Tejo'),
  ]),
  new QuestaoModel(534, "Quem foi o primeiro Rei de Portugal?", [
    RespostaModel.errada('D. Manuel I'),
    RespostaModel.errada('D. João I'),
    RespostaModel.errada('D. Pedro IV'),
    RespostaModel.certa('D. Afonso Henriques'),
  ]),
  new QuestaoModel(736, "Qual é o prato típico de Portugal feito com bacalhau e batatas?", [
    RespostaModel.errada('Caldo Verde'),
    RespostaModel.errada('Cozido à Portuguesa'),
    RespostaModel.errada('Feijoada'),
    RespostaModel.certa('Bacalhau à Brás'),
  ]),
  new QuestaoModel(542, "Qual é a maior ilha do arquipélago dos Açores?", [
    RespostaModel.errada('São Jorge'),
    RespostaModel.errada('Faial'),
    RespostaModel.errada('Pico'),
    RespostaModel.certa('São Miguel'),
  ]),
  new QuestaoModel(472, "Qual é a moeda oficial de Portugal?", [
    RespostaModel.errada('Escudo'),
    RespostaModel.errada('Real'),
    RespostaModel.errada('Peseta'),
    RespostaModel.certa('Euro'),
  ]),
  new QuestaoModel(511, "Quem escreveu 'Os Lusíadas'?", [
    RespostaModel.errada('Fernando Pessoa'),
    RespostaModel.errada('Eça de Queirós'),
    RespostaModel.errada('José Saramago'),
    RespostaModel.certa('Luís de Camões'),
  ]),
  new QuestaoModel(8, "Qual é a equipa de futebol portuguesa conhecida como 'Dragões'?", [
    RespostaModel.errada('Benfica'),
    RespostaModel.errada('Sporting'),
    RespostaModel.errada('Braga'),
    RespostaModel.certa('Porto'),
  ]),
  new QuestaoModel(155, "Em que cidade se realiza a festa de São João, conhecida pelas martelinhas e alho-porro?", [
    RespostaModel.errada('Lisboa'),
    RespostaModel.errada('Braga'),
    RespostaModel.errada('Coimbra'),
    RespostaModel.certa('Porto'),
  ]),
  new QuestaoModel(835, "Qual é o nome da famosa ponte que liga Lisboa a Almada?", [
    RespostaModel.errada('Ponte da Amizade'),
    RespostaModel.errada('Ponte do Infante'),
    RespostaModel.errada('Ponte Vasco da Gama'),
    RespostaModel.certa('Ponte 25 de Abril'),
  ]),
  new QuestaoModel(140, "Quem foi o presidente de Portugal durante a Revolução dos Cravos em 1974?", [
    RespostaModel.errada('Mário Soares'),
    RespostaModel.errada('Marcelo Rebelo de Sousa'),
    RespostaModel.errada('Jorge Sampaio'),
    RespostaModel.certa('António de Spínola'),
  ]),
  new QuestaoModel(570, "Qual é o nome do estilo musical tradicional de Portugal, famoso em Coimbra e Lisboa?", [
    RespostaModel.errada('Flamenco'),
    RespostaModel.errada('Samba'),
    RespostaModel.errada('Tango'),
    RespostaModel.certa('Fado'),
  ]),
  new QuestaoModel(136, "Qual destes monumentos é um Patrimônio Mundial da UNESCO em Portugal?", [
    RespostaModel.errada('Sagrada Família'),
    RespostaModel.errada('Torre Eiffel'),
    RespostaModel.errada('Coliseu'),
    RespostaModel.certa('Torre de Belém'),
  ]),
  new QuestaoModel(315, "Qual é a cidade portuguesa conhecida pelo evento anual “Queima das Fitas”?", [
    RespostaModel.errada('Porto'),
    RespostaModel.errada('Braga'),
    RespostaModel.errada('Lisboa'),
    RespostaModel.certa('Coimbra'),
  ]),
  new QuestaoModel(283, "Qual é o nome do famoso mosteiro em Lisboa, conhecido pela arquitetura manuelina?", [
    RespostaModel.errada('Mosteiro da Batalha'),
    RespostaModel.errada('Mosteiro de Alcobaça'),
    RespostaModel.errada('Mosteiro de Tibães'),
    RespostaModel.certa('Mosteiro dos Jerónimos'),
  ])
]

export default questoes