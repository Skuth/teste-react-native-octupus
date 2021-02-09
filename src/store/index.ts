import { createStore, Reducer, Store } from "redux"

import { quizInterface, ActionInterface } from "../interfaces"

const INITIAL_STATE: quizInterface = {
  activeQuestion: 0,
  activeOption: undefined,
  timeLimit: 10,
  awnsers: [],
  questions: [
    {
      image:
        "https://www.momondo.com.br/discover/wp-content/uploads/sites/282/2016/01/b9921517-5cf6-3614-9f14-b7e7ff365176.jpg",
      question: "Em que local fica localizado o Parque Lage",
      options: [
        {
          option: "Rio de Janeiro",
          correct: true
        },
        {
          option: "São Paulo",
          correct: false
        },
        {
          option: "Curitiba",
          correct: false
        },
        {
          option: "Bahia",
          correct: false
        },
        {
          option: "Amazonas",
          correct: false
        }
      ]
    },
    {
      image:
        "https://cdn2.civitatis.com/francia/paris/entrada-museo-louvre-grid.jpg",
      question: "Em que país fica localizado o Museu do Louve",
      options: [
        {
          option: "Russia",
          correct: false
        },
        {
          option: "Brasil",
          correct: false
        },
        {
          option: "Estados Unidos",
          correct: false
        },
        {
          option: "França",
          correct: true
        },
        {
          option: "Espanha",
          correct: false
        }
      ]
    },
    {
      image:
        "https://blog.casadaindia.com.br/wp-content/uploads/2020/11/A-hist%C3%B3ria-por-tr%C3%A1s-da-constru%C3%A7%C3%A3o-do-Taj-Mahal-scaled.jpg",
      question: "Qual o nome desse ponto turístico",
      options: [
        {
          option: "Palácio de Versalhes",
          correct: false
        },
        {
          option: "Taj Mahal",
          correct: true
        },
        {
          option: "Stonehenge",
          correct: false
        },
        {
          option: "Basílica de Sacré Cœur",
          correct: false
        },
        {
          option: "Casa Rosada",
          correct: false
        }
      ]
    },
    {
      image:
        "https://www.hypeness.com.br/1/2020/06/estatua-da-liberdade-destaque.jpg",
      question: "Qual o nome dessa estátua",
      options: [
        {
          option: "Cristo Redentor",
          correct: false
        },
        {
          option: "Mãe Pátria",
          correct: false
        },
        {
          option: "Discóbolo",
          correct: false
        },
        {
          option: "Afrodite de Cnido",
          correct: false
        },
        {
          option: "Estatua da Liberdade",
          correct: true
        }
      ]
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
      question: "Onde fica localizado Machu Picchu",
      options: [
        {
          option: "Peru",
          correct: true
        },
        {
          option: "Argentina",
          correct: false
        },
        {
          option: "Espanha",
          correct: false
        },
        {
          option: "Suécia",
          correct: false
        },
        {
          option: "Grécia",
          correct: false
        }
      ]
    },
    {
      image:
        "https://1.bp.blogspot.com/-aN76oKVNkGA/XgUEjhVBJMI/AAAAAAAAO9M/8GA04iUG6aYQsghaPaMwCgrO4Rqkc_NiACLcBGAsYHQ/s1600/praca-vermelha.jpg",
      question: "Em que local da Rússia fica localizado a Praça Vermelha",
      options: [
        {
          option: "São Petersburgo",
          correct: false
        },
        {
          option: "Moscou",
          correct: true
        },
        {
          option: "Saratov",
          correct: false
        },
        {
          option: "Perm",
          correct: false
        },
        {
          option: "Novosibirsk",
          correct: false
        }
      ]
    },
    {
      image:
        "https://aventurasnahistoria.uol.com.br/media/_versions/capa_great_wall_of_china_history_widexl.jpeg",
      question: "Qual o tamanho em km da Muralha da China",
      options: [
        {
          option: "56.375 km",
          correct: false
        },
        {
          option: "17.516 km",
          correct: false
        },
        {
          option: "13.675 km",
          correct: false
        },
        {
          option: "21.196 km",
          correct: true
        },
        {
          option: "38.943 km",
          correct: false
        }
      ]
    },
    {
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/dc/2020/02/20/torre-de-pisa-na-italia-1582220175721_v2_1920x1080.jpg",
      question: "Em que país a Torre de Pisa fica localizada",
      options: [
        {
          option: "Croácia",
          correct: false
        },
        {
          option: "Sérvia",
          correct: false
        },
        {
          option: "Itália",
          correct: true
        },
        {
          option: "Grécia",
          correct: false
        },
        {
          option: "Hungria",
          correct: false
        }
      ]
    },
    {
      image:
        "https://s2.glbimg.com/W2KPIhKiogzkOD9bOvi9gYSkh70=/e.glbimg.com/og/ed/f/original/2016/01/07/stonehenge_1.jpg",
      question: "Qual o nome desse ponto turístico",
      options: [
        {
          option: "El Ateneo Grand Splendid",
          correct: false
        },
        {
          option: "Acrópole",
          correct: false
        },
        {
          option: "Duomo di Milano",
          correct: false
        },
        {
          option: "Angkor Wat",
          correct: false
        },
        {
          option: "Stonehenge",
          correct: true
        }
      ]
    },
    {
      image:
        "https://cache.quantocustaviajar.com/blog/wp-content/uploads/2018/12/pontos-turisticos-mais-visitados-do-mundo-19-1024x683.jpg",
      question: "Qual o nome do maior edifício do mundo",
      options: [
        {
          option: "Shanghai Tower",
          correct: false
        },
        {
          option: "Burj Khalifa",
          correct: true
        },
        {
          option: "Ping An Finance Center",
          correct: false
        },
        {
          option: "Lakhta Center",
          correct: false
        },
        {
          option: "Centro Financeiro Internacional de Cantão",
          correct: false
        }
      ]
    },
    {
      image:
        "https://rotadeferias.com.br/wp-content/uploads/2020/06/16-22-750x499.jpg",
      question: "Em que ano foi construída a Torre Eiffel",
      options: [
        {
          option: "1790",
          correct: false
        },
        {
          option: "1763",
          correct: false
        },
        {
          option: "1887",
          correct: true
        },
        {
          option: "1912",
          correct: false
        },
        {
          option: "1832",
          correct: false
        }
      ]
    },
    {
      image:
        "https://guiadoestrangeiro.files.wordpress.com/2014/12/arco-do-triunfo.jpg",
      question: "Em que país fica localizado o Arco do Triunfo",
      options: [
        {
          option: "Reino Unido",
          correct: false
        },
        {
          option: "Polônia",
          correct: false
        },
        {
          option: "Itália",
          correct: false
        },
        {
          option: "França",
          correct: true
        },
        {
          option: "Grécia",
          correct: false
        }
      ]
    },
    {
      image:
        "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=25&s=73df3771d712977dd6643dbb3645ae8f&w=375&h=250&dpr=2.625",
      question: "Em que ano o Coliseu foi construído",
      options: [
        {
          option: "70 d.C",
          correct: true
        },
        {
          option: "20 d.C",
          correct: false
        },
        {
          option: "33 a.C",
          correct: false
        },
        {
          option: "17 a.C",
          correct: false
        },
        {
          option: "172 d.C",
          correct: false
        }
      ]
    },
    {
      image:
        "https://veja.abril.com.br/wp-content/uploads/2016/05/alx_lista-visite-em-um-dia-20140331-09_original.jpeg",
      question: "Qual o menor país do mundo",
      options: [
        {
          option: "São Cristóvão e Névis",
          correct: false
        },
        {
          option: "Malta",
          correct: false
        },
        {
          option: "Mônaco",
          correct: false
        },
        {
          option: "Vaticano",
          correct: true
        },
        {
          option: "Tuvalu",
          correct: false
        }
      ]
    },
    {
      image: "https://t2.tudocdn.net/525591?w=646&h=284",
      question: "Onde fica o maior vulcão do mundo",
      options: [
        {
          option: "Taiwan",
          correct: false
        },
        {
          option: "Japão",
          correct: false
        },
        {
          option: "Malásia",
          correct: false
        },
        {
          option: "Austrália",
          correct: false
        },
        {
          option: "Havaí",
          correct: true
        }
      ]
    }
  ]
}

const reducer: Reducer | any = (
  state = INITIAL_STATE,
  action: ActionInterface
) => {
  switch (action.type) {
    case "SET_ACTIVE_OPTION":
      return { ...state, activeOption: action.option }

    case "SET_ACTIVE_QUESTION":
      return { ...state, activeQuestion: action.question }

    case "SET_AWNSER":
      // eslint-disable-next-line no-case-declarations
      const awnsers = state.awnsers
      awnsers.push(action.awnser)
      return {
        ...state,
        awnsers: awnsers
      }

    case "REMOVE_AWNSER":
      return {
        ...state,
        awnsers: state.awnsers.length > 1 ? state.awnsers.pop() : []
      }

    case "COMPLETE_QUIZ":
      return {
        ...state,
        awnsers: [],
        activeOption: undefined,
        activeQuestion: 0
      }

    default:
      return state
  }
}

const store: Store = createStore(reducer)

export default store
