import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddToCart from './AddToCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
  <AddToCart min="5" max="10" price="1120" imgUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgSFhUVGBUZGBgYEhkYEhUYGBUSGBQZHBwYGBgcIS4lHB4rHxgYKEYmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHxISHjQsJSs0NDQ9PzU1PzE0NjQ0NTQ9NDQ3MTQ/NzE2NTQ0MTQ0NDQ0PTQxNDQ2ND00MTQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAwEEBQYHAv/EADwQAAIBAgQEAwUGBAUFAAAAAAECAAMRBAUhMRJBUWEGInETMlKBkUJiobHB0RSC4fAHJDOy8RUjQ6LC/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREBAAICAgEDAwMFAAAAAAAAAAECAxEEIUESMVETYXEFIjIjQrHB0f/aAAwDAQACEQMRAD8A7BERJQREQEREBERAREQEREBERAREQEREBERAREQEREBETxUqKqlmYKo3LEAD1Jge4nilVVhxKysp2KkEH5ie4SREQgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIlpmWYU8PTatVcIijUnryAA1JPIDUwmImZ1C4qVAoLMQFG5PKct8X4TGYl2r1B/l0J9jTVr8KD/yOvNjud+EadzjfEniWrjqg96nh1N6dPisWPx1LHU9BsPXWZPwh4gqF2whDViULUlvdgQQCpJPu2bnoLTCbxefS9THxMnHrGe0R14n4Y3wjnDUMZSRT5arrTdBs3EbBrfECQb9AROzTRPCHgP8AhqxxeIZalcFvZIl/Z0Q3MEgFmsSL6AX+c3uXx1msaly8zPXNk9VYIiJdykRElBERAREQEREBERAREQEREBERAREQEREBETBeJvEtLCJc+eqw/wC1TBszfeJ+yv3vpc6SJmIjcr0pa9orWNzK6z3O6WEpGrVbsiDVqj/Co5nvsOc5DnWb1sZU9rWPCq/6VIElaY/+n6tb6DSRZjjquIqGvXbifZQNERL+4i8h+J53lrgsLWxdYYbDrcnV2NwqJfV2bkPxPKclr2vPpr7Pf4/Ex8Sn1Mv8v8GHo1MTWXDYdOOo3yVUG7s32VF9/kLkgTr3hLwvSwNOws9ZgPbVSNWPwjoo6fM6yfwv4bpYKl7NPM7WNaow81R7b/dUclGg9SSc3N8eOKx93l8vmXz21/aRETVwkREBERAREQEREBERAREQEREBERAREQERNZ8YeM8PgE8xD1yLpRVhxHozH7K9zvyBhMRMzqGzRObZF4jzXEUjXf8AhMNS3QvQqEsvxWNUWXud5HmWV4zMQ1L/AKtTCAedMPQVVIPxFapYg9CbdoT6Z2y/ibx1TpXo4YrVrahm3p0j94j3m+6PmeR5zXqMzNVqMz1GN3djck/oOw0Ehr5DiMDVFOsSaZuFcXZSORB3HccufWVybLquPrihRNl3qva60kBsSbHU30AB1Pa5HJlre1teHvcLJgwY5tr92vPn8PeVZdWx1f8Ah6AsBY1XIPBSUndupNjZdzboCR2fw7kNHBURRpDvUc246j/Ex/TYCS5Hk1HCUVoUVso1Ym3E721dzzY2/QWAtMlN6UisPK5fLvnvufYiImjkIiICIiAiIgIiICIiAiIgIiICIiAiIgIlpmeYUsPSatWdadNd2Y/QAbknoNTOJeMv8R6mLY0KJajhCQtRh/q1Fv5ixHurb7I35k3sIWrWZbz4m8buXbCZahxGIGlSooDUqP8AMfKW338oPXUTnlTKGwmLpYvMmWotR2aqBVFSoH4fKzodXUG3u3A4flOh4TE4NMH7LC4nD0hwWRxUpsUcr77KWHE/rMJk2VZXRdq9aucTWvxM9RXcFtNVUAg8t+I94nr3bUpa37axM/j3ZHOauCx9JKb4mrTpFg6utN0R7A2DO6cBGt7dQIyzwRUoshoV0VQQwqKp4yPya4727TOYXxPha9RcMA547qvHT8jWF+Gx7DmJic6Stl5U4eoRQdiOBlDinUtcBL6hTY6X0I7ytpiY9Xx8OvBXLS3046mY9pj3/wCNpzhaHsG/iOE0wPMW68iLa8XprNF8K50mDrVEWmxw9VuO9gaq6ABjb3hYDy7jcXJN8XjswrV2X2js5DeVOCygnS4Vdz+Mz2RZMWqKAqmqNWa11ooeZ6ueX9mZ+v1Wj0uueLTjYbRnncz4j/TpKOGAYaggEehlZHh6QRFQXIUAAnc25mSTd4RERCCIiAiIgIiICIiAiIgIiICIiAiIgJa4zGrTGurcl5+p6CW2PzIL5UsW5ncD06ma9jarWL3ub6k6nXnr8plbJrqGtMe+5c+C188xb1KtQ08JSPlA91FOwUHTjIFyxvb6CXOa5jl2XFaWFw9HE17XNRnWpwHUatr5tPdXhmqZ7kzri3pUw3s3IqILnhCv15eU8S/yzMZRkiUhxHhZ7btsvp+8TkiIejx+BfNO46qzuQeJsUayPXSgFdlUqtIKwDsAGDXJuCZtXjvLFal/FKPNTt7S1gXpX1F+ovcH1mO8C4ai5d3RTUpuOBidACNCBe2hB1l94zz6kKL4ZGVqjjhYKQQiHcsRsbcu8RP7ZmzS1PRya0wRMTHUz8shkPh7DUQtdAWYqGV3a5VWX7OwGh3teYPxlmy12TC0SHKtxuym4DKCAoOxNyb9LTTq9ghLNwoouxYtwKNtvyA1Owl54KrVsViPZ4emooqB7Wo6kFV+IkGwJ1sg3tqeYpFpvXVY00y4q8XL9TLf1Wj2hs+SZEzGyHzm3G51Wmp3t1O/r6Xm+YDApRQIg03YnVmbmzHmZXBYRKSBFGnMndm6k9ZcTSlIrDyc/ItmtNrSRETRzkREBERAREQEREBERAREQEREBESOvXVF4mOnLqfSRvSXp3AFybAbmYTH5mWuqaLzPNv2Et8djmc9F5D+9zLVVmFsm+ob0x67lQy7wuDLb7fnJsJgvtN9Jf8A5SK18yta3iGm+NMFwmm6oxUKysyKTw6grxW5atrNJbEEgWOx/CdmMsMXlGHe5ajTYnc8IBPzGsram529PifqX0qRS0b18OR1aYN9j0/pJ8BljupcIxUC44WVeJh9lSxAvOhYvK8JQF/Yozn3Va7AdyGJFpaYHL6uIxJa/kCgbWRAeijT0H9Yisz1LXL+qxr+nGvy5zluQ4zMsUKBR6NNDepxKwWihuL6++5sQOvYDTumR5PRwlBcPRXhVdz9pm5sx5sf70l3hcKtNAiCw59SepPMyadNY1GnhZctslptaSIiWZERKFoFY4pEzyMvAuOKVkCmTLArERAREQEREBERAREs8djQgtu3IdO5kTMRG5TETPUJMXilQXOp5Dr+wmu4nEs7XY+nQDoJHWrlySTc9Z5RSTYbzmtebOitIqqq3NhvMphcIF8zb/lK4TDBBfnz7SVqmvCP+P6ya113Ja2+oeatUgkDWwB4bbjueUqjsTysN7del+ct8S4twg2+I72B5dyf68pcpsAB/STvs109FpjszzJaQsLM/Icl9e/aQ5rm4S9NDd+Z5J6d/wApiMuwL16nCNTu7HZQeZ79uf1jyjxtNgcK+Iqb3J1djso6/wBJumEwqU0CINBv1J6nvKYLCJSQIo05nmx6nvLia1rpla2yJSUZxLqPUoWlu+IAlu1cmBdPVkRcmQrrJVWBUT2qwqyQCAUSRZQCVgViIgIiICIiAiJY5jjwg4Rqx2+73Mi1oiNymImZ1CuYY4ILDVv9vczXatQsbkk337w7kkkm99+88AdN5y2tNpdVaxWFVUk2G8yWFoBR35mQ4akF9ecuQ0msaLSkNTW0timpJOm5Ol+1u8lZL63I9LfrAQaDfa3ykz2rHSKmhZgQLAcrc/1O2ssM1za16dM67Ow5dlP6yDNs33p0z2dxz+6v7ywyzBNXfgQWG7sdlXqe/bnJiCZ+XvLsA1Z+BPV2Oyjqf25zesBg0pIEUabkndm6nvGBwaUUFNBpzJ3ZuZJ6yZnAmta6Y2tt6lHcCWVfHATHVcYW2l1GTq4sCWb4omWQJMnRIEikmTIsoiS4RIBVkqLCLJVWBQCewIAnqBSViICIiAiIgIiWWZY4Ukvux90eptc9pEzqNpiNzqDMceKYsNWOw6dzNcZyxLE3J37zFZp4ho0VFTEVAHYA8O7sSOSDW34TVqv+IodwlDDO5JsvE/Cx9EUNf6zmtNrT9nXWnp68t8lxQS3rMXkuIrOt61AUjyHtA9/oBaZcGVTaNdJQ09qZAD9J74pO1dJwZgc7zbekh12qMP8Aav7ymc5tw3pofNs7D7P3R3/KYfBYRqr8C6fEx2Vep/bnL1hWUuV4B69TgTYaux2Vep/bnN/wdFKFMU02GpJ3ZubMesxGGdKFP2dMabk82bmzHmZFUxTNzmta6Y2ttl6+YgbTHVsazS1CkyZKUso86mSpTk1OjLlKMkQpTlylOSpSk6UoESpJkSSqkraBQLKysQEREBERAREQERIMbi0pU2qOwVVF2J/AepMJecdjFpJxN6KOrTmPjjxcaSBEIOIcXJsLUlDGxsdz0Ha577Zmbl6h4tRZCo5KA1zacMzOua2IqVeTuxHZb+UfS0yvaYd3EwReWLrs1R2d2LMxuzMSST3M23BA4KjTNPhXEVU9o7kBilEnyIoYWHFa5/4mvij5h3m+HAq9OjWchQaCoy2u7FCQOAHQaHc7aTC19xqHpUwVpeJtHle5X4sI4RVBKnQvw2IPWw0IvfabgjhgCCCpAII2IPTtNEy6nhq7LQ4aiaEU2NQFiVGxAFgbXPPabVkmBehTNNn40DXpnZgp+yfQ3+spWZlTm48Vf4xMT8T5j7MrxTEZvmvB5EPnO5+EfvGbZlwLYe+fdHTuZrlFGd7DVjqSfxJM0rG3m2nSfDUmdrDfryA6mbJhqYROBfUnmx6mW+Ew4ReEfzHmTLxEnRWunNa21QLyVKckp0peUqMuohp0Zd06Mnp0ZcpSgQJRlwlKSqkrAoElZWICIiAiIgIiICIiAiIgUYgC50A1J6CcK/xE8YnF1fY0W/y9JvKQdKtRftnqo5fXpO5VwCpUi4III6gjWcY8V+Cx7VjQIWobsqGypWXqh2VxzXbmLSY1vttgmsW3Le+MOUbkyG/z4T+s5dm3hupRqsqozpxeRkUt5WOgYDUHlOh5S7ewpcakOEQOGFircFjcesm4fP6gfgx/ecmSYnp28bNOG0zEbc7wXhyq9mdWpovmclG9pwjkiWuT8pfY+vhnqKS1cBVCIFCcCIvK1+LffnN4t5tN7EdrXH47zV89ynjxVNUUDj81Rh9kD3mPy/H1mOuunoYuVGTJu/XU+zF1sufD1qTg8SNUQ03AIuCw8rA7Gx+c3bMseEQsfQD4m6TzmC0zTs9uBCrehQgrbvcDTnNWxeJavU2Ntqa9B/e5lq1+PZx8rlTmiJt7x09B3q1OrH+/kBNhwGFCLYbn3j1P7SHLcGEXqx94/oO0zFCjedda6eZe21KdOXtGjJsPhZkaOHtLs1vRw0vKdGTIkkAgeVSerSsQEREBERAREQEREBERAREQEREDyy3mA8QZJ7WmR8xbQqw2ZTyImwxA5aMyqYZvZ4lSU2WsF+nGo59xM1Tqq4DowYHYggi2k23GZdTqKVdAQdDcCaRmfgmrSY1cFUKHc0ybo3y5fQ/KY3xb9m9MuvdkApv02J78v1kVQi5IsNPM3Rd95rdbxHWoWTF4Z0tvUQeU2PfT/wBvlLbNPESVl9nQLcBtxmxDMT9gDf8AeYzSY6bReJjZmuY+1cU0vwA+Xq7fFMrlOWFRcjzHfsOgl14e8MsoFRx5zsPgH7zb8NloXlOildQ5733LE4XLzMzhsEBL1KAElAmjJElICShZWIFJWIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIEdSirCzKCOdxMZS8NYRavtkw9JX+JUAN+uml+8y8QPK0wOUraViAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH/2Q==" item="Cricket Bat" desc="Rory Burns Cricket Bat"/>
  <AddToCart min="2" max="5" price="1120" item="Ball" desc="Colored ball with abcd" imgUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhMWFRUXFxgXFxgXGBcaGBcaFxUXFxUaFxgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICUtLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xABHEAABAwEEBgYGBwUGBwAAAAABAAIDEQQFEiEGMUFRYYEHEyJxkaEyQmKxwdEUI1JygpLwM5PS4fEVQ1NUorIWFyQ0RLPC/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMFAQIEBgf/xAA0EQACAQICBgkEAgMBAQAAAAAAAQIDEQQhBRIxQVFxEyJhgZGhsdHwMkLB4SNSFDPxJQb/2gAMAwEAAhEDEQA/APcUREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEVFxekXSJZbPVkf18g+yQGA8X7fw15KSlRnVerBXZrKcYq8mdquYvvTax2aoMnWPHqR9o19o+i3maryW/8ATW12qodJgYfUjq1vOmbuZK5sSHervD6FvnVl3L39vE4amN/ovE7q+uk22SGkOGFu5oD383PFPBoUU3Sm2S+naZT3PLQeTaZLmxQ8V0Oiuis1td9X2IwaOkOoEbBn2j3LsxejsL/jyjJKK/tvT3Z7XyzGDxtalXU49binsa9Fz3eRkFvm19bJ+8f81lhve1N9GeYd0j/mvTrp0LssLQHM61210mdfw6qKYbdFnAoIIgPuN+S8R/iy/svM9fLS9DdTb52XueW2TTG2xnKZzhueA7zIr5qYs3STMP2kDHfdLmnzxLvv7Pi/w2flb8lgfc1mOuCI/gb8lIqNRbJnLLG4Wf1UPO3okc7ZukqA/tIpG/dLXDzIPkpSyab2F/8AfYTue1w86U81itmhlik/usB3scRTlq8lBWno8ja6oleWbQQMX5tXksSlWgnJ2aNf/Pmr9aPn4bfM72x26KUVikY8b2uB9y2l5gdDY20cyaVjhqcCPgAVKWF9uhoG2hszfszA1/ODXxqoYaQpPbkck6dH7KnimvNXXod2ih7svYydmSPq3/eDmH7rhQ14EDmphdsJxmrxdyBqz+fgIiLYwEREAREQBERAEREAREQBRV/X3DZIjJM6g9Vo9J53NG0+Q2rS0s0nhsEWJ/akdXq4wc3HedzRtPvOS8I0h0gntkpkmdU6gBk1o3NGwfrNWOB0fLEPWllHzfL3OaviVTyWbJ3S7Tu0WurAerh/w2n0h7btbu7VwXIOkJ1qzEqheoo0YUo6sFZFXOUpu8i9ZGhWNbz7vhvXsOgmgjYWttFqaHSmhaw6o9oqNr/ctMXi4YaGtPuXH5xJKNFzeRA6F9Hzp6TWoFkWsR5h79xO1rfM8F6zZbOyNoYxoa1ooABQAdyytWpe94ss8L5pDRrGknedwHEmgHevJ4rF1MTLWm+S3L5xd/AtadONNWRuqq8yaL9DnTRsbSU4ywmM4agBre0aigAFO9ZP+Jr6i/a2JrgPsseSd/oOIXPckselKlF51YukSZ8jYPoZErzhZVzgKna4OaCGjMnuXoMNcIxEE0FSBQE7SBsCwYLiFitIq09yzErFJqKON1YEHhWJ4WYhY3iq8imamAv2LfsF6lhwvq5uze35hR8jVhqpaNaVOV4sXO0ikDhVpqFkXHWO8XRu15bf5hdVZp2yNDm/0XoMPiI1o3W3ejZO5nREXQZCIiAIiIAiIgCh9Jb+isUJllNdjGgir3bAPidgUrI8NBJ1BecdJFyPtkfWRgmSMktFdbT6TRx1HjRTYeEJ1YxqOy3mlRyUG47Tyu/77ltczppXVcTyaNjWjY0frNRdVIXbc89oeWRsJIycTk1tPtE6jw1rvLk0Ihio6X65+4+gPw+tz8FeaS03gdGR1KkutbKEc5eF+qu2Vuy5wYfBVsRmllxfy77jjbi0antRBAwR7ZHA0/CPWPd4hdvYNCLLGO2HyHiS1vINofEldIBQUGVFlYvnWkv/AK3H4qTVKXRQ4ReffLbflqrsL7D6No0l1lrPi/b/AKaFluazMcxws8dWEOFBtGYrv5ruLJaWyNJGW8bQuYqropS01Bp8VX4PTOIpS/llKce1ttdqbv4Xs+Z0VMNCS6qSZ1bFy2nlhtcwhFmYx7WSCR7XOw4ywgsbmKFuuue5TdhvEPyOTt3yW6HL11GvCtBTpu6ZWzg4OzNe6rW+RlZIXwuGRa7Cc/Zc0kOHFbdFbiVC9SmpglsMbpGSkVfGHBp3Y6Yst/ZA8VsVVhcrXPCAvLlie7I9y1bTfEDPSkbXcMz5KEvLScEERMJJGtxwj5+ShqYmlT+qSXfn4bSWFCrP6YvwNgy8UL1EWG0YtZzC3w+ua8nGTZzyi4u0lZmR6xvCF/zVKqRAwSNW1dF4GJ/snWFqyOK1iT4LqoVXTmpR+dhg9DY8OAIzB1K9ctcN9s6xtne6j3tc6MH1sNMQadVaGtOBK6leji9aKktjzRuncIiLJkIiIAiIgNC8pdTeZ+C0oxmFrS2wOlw1zILqbmggD3+RVbXLhY7up4rSrVVKnKb2JN+GZmK1pJIirU9pe4tAAJrkNeyp8ArQsSvC+dVKkqk3OW1u77y7jFJWRcSmJWqhWhtYvxJiWMohmxkD9ymLBemx/j81CFUqunCYyrhZ69N81ufMjqUo1FZnWmYUrUU3qJtekkLcmkvPsjLx1Llb1nJdhxHCNlcvBaQfReklpiUop04255/Ob8DSlo2Lzm/AnrVpLM7JgaweLv5KLntT3+m8u7z8NS1OtVDKuCria1X65Plu8Nh308PTp/TH5z2mQlYy5WdYrS9QJWJS909DUbFJ2C8cdA49pQr+5UZvGSycmLwka8eDWx/h9nodc16y4lEXXag7Xka0A7lJUyot0zzkoShJxkrNFHmma1pxtWdzclru3KWLNSD0ua4QtmjP1kD2yMO4tcP1yXqdw3oy1WeKdmqRoNNx1Ob3ggjkvPrdZw+KRv2mu9yw9CN91EtkcdX1sfcSBIPEtPMr0ujf5MJJb4S8pftNmmtq1EuPqj1hERTE4REQBYLU+jHEbis6i9JZnMsszmAlwYcIGZLvVpzQHHaP/Wzz2knW4wMGwMhcRXm8vKlb0fRrRvNfD+qg9EmSs+rfC6JjWDCXOa4uPZDsWHIOq2vGpUre7+00bh7yq3S9TUwk7b7Lxav5XJ8Mr1UagKyBy12uWSq8My3SMlUKsDlWqGS5FZVKrAKlWko47Vr2qSjSeCylfIbSFtEtXk8VixK3EhVylZWO9F2NUc5WlUCzYF1UxKyqEoGXuI2q3Eraq6qGDLDUatan7vtwcMJyI37VzocrevIzB1bvd5rXtOPFYSNePB7n+H2eh1MriP1+ty1pZNq2bLYnmNjnOFSK0A1V413IbtBJq48lZQwNdq+r5o824tGqXgt/XNeaaLXr9Et8coya2Qh33HEtf35E+AXqP9nDOjz5LyrSW6zZrS9hJLX9trqa8RNeYNV6PQVCVOVSFT7kt/O/qc2ITUVLgz6dRQ2iVu6+xWeU5l0TcX3mjC//AFAqZWGrOx2J3V0ERFgBaN8/sj3j3reUdfRPV/iFfP8AkgIaMqKvF9ZDyHgFuT2oMFTyG9Q88uJxO81VDp6ouijBbb3fg/yzrwdtd8i4FXtKwtcsjSvJWsWhlBVVjBV2JAZFaaqwvVC9YAJWjer6MpvP81uOCib3dmBzU1CN6iJKavJEeqJiVtVbHWXkqwFUJVKoC6qoCrCUqgMtVbVWVRxQwXF9FZZ2GR7WD1nADmVjklCk9FYsc4OxgLj7h5nyUtGn0k1Di1+/Iiqz1IOfBf8APM7iWgFANWQ4ALXL1V7s1hcV608uXBcb0lWHFA2UDON3+l/ZPnhK64uzWjfNmEsMkZ9Zjh5ZedFJSqdHNS4fH5Gs460WiV6IbQX3c0fYkkaOZD//ALXbrzroRJ+hSA7Jz/646r0VMSrVZLtNaLvTjyCIihJAo6+3UiJ2AivD9auakVE6Sk/R303tr+YLSpLVi5Lcm/IHD2qcvNTy4LE01+HHvKueFiXl6v8AJfWzuaxm4S1kZmOV/WLEH+P681VzK5hU1Wk6crMu6FVVY3RmL1aJFrB5GRV1VE42JjZxqheslmsUj9TeZy/qpSzXK0Zvdi4DIfNd9DRWJrbI2XF5ft9yIp4inDa/DMhgc6CpPDWoi9Y5Gv7THNrqxAivdVehQxMZ6DQOWfite8bIyeMseO47QdhCuaWg+ji3r3lysvchp6QUZ5xy8zzcqi2rxsT4Xljxq1HYRsIWouFpp2e0uVJSV1sKqhSqtKwZCVVqVQMElYnFXOKxkoYLXrsNE7OGxF+158hkPOq5CCIyPaxozJA/r716NZ4AxjWjU0ADkrbRdFubnwy73+is0lUtBQ4+i/foX8VE33e0dmjMkldwA1uOwDeVKyGi86ts/wBLvVsZI6uCpAO1zQCedSOTSrspSYtGkkrAwvsz48b42tLi0jtvaDiwnsmhJz3KfmdksNuszZGYHcM9xGYI4ghVmcsMEl0TR4bNPQUH0mWnINHwXcrkOjShssjgKB1omI/PT4Lr1vUd5tmIqyCIi0MhaF9xYoJAPs1/KQ74LfVj21BB2inisNXVmDzKQLCVu22Ase5h1tJHfRabl5ecWnZkbGGqxSMlAxMoc82nLXxCzhXiWgUM4qSszMJyg7xZMQXPl9YfBbsFjYz0Wge/xK2Gy1VC5emoYOhQ/wBcUu3f47TonWnPawGq8KyqqSugjLysEmSvLlbVZBpXpd7J2YXZEZtdtB+XBcFbLO6J5Y8UI/VRvC9Fdlmo++LvZaGbnj0XfA7wuDG4PplrR+pefZ7eB3YPF9C9WX0vy7fc4OqK60wOjcWvFHDWPjzVi8+1Z2Zep3zKUVCryFaQsGTEVa5W2i1Rx5vcB+vFRNs0iYMo2knech81JClOf0obTuNEbFmZiMhUN79p8MuZXVY15fcGnjoy1kzGmMZVaCCONCc16HZLcyVgexwc06iCvR4WMYU1Fd/MoMfTqqprTWT2cOXMzTOK8w0bcRe02LX9b/uHwXpbnVXIX1ou91pFqs0jY5B6QcCWuNKVy4ZHkuk4TV6RrVKxsIjkcwOcWkNNK1A2jP8AquqiYGtDQMgKfqqhZLgfM9j7XI14YcTWMaWsxbySS53iApa1S4QT4fBYbUU29gSvkjstBbOI7Gxo1Y5T31lea+a6JRmjkOCywt9gH83a+Kk1iDbim9tkZdk8giItjAREQHFaWwYZsX2gD8D7vNQK7HS+zVY149UkHud/Mea41yoMbDVqvtzNWUqqOH6OpVKouJmh0tilqxp4BbAcoi55atLdx2bjn76qSxL01CevTjLiiVPIzBytklABJIAGZJyCxhy5zTuK0SWYx2duIuNHUIBw6zSuuuQ5qUydOJK6imJeP3Xp1arKeqtDS8Nyo7svbz28/FdzcmmVltNAH4Hn1H5HlsPIoDpVYTRWiUb0cVkEbfl1idtRQSDUd4+yeHuXnVtvqOF5jc1xc0kGgFARrFfkvRb+tnU2eWT7LCR30yHjReFSVLiSak5k7661XYvC05zUnt39vAvdFKU4yTeS2d+fsTlp0ncf2cYb9418hRRtpved+ReQNzcvctOitooo0KcdiLbo0ilFWiqimN7FFLaP6QS2V1Rmw+k06jxG48VEqiym1miOpCM46sldHtN0XxFaY8cZ72nW07iFuheJXZeEkDw+N2EjXuI2g7wvUNHdI47U2noyAdplfEt3hdVOqpZPaecxmBlR60c4+a5+/oTMhURO8yytjbnmGjvJos95W4AYWnPad381uaB3d1loDyOzGMR79TR45/hXFiq/STWHhvfW9ufH5aCnT1I9I+49LijDWho1AADuAoFkRFZHMEREAREQGtbrOJI3MPrCncdh8aLzi0xFji12RBIPeF6guW0suuv1zBwePc74HkuHHUNeOstq9DDRyZVClUKo2aG1dklJAN+XxHuUyuca4g1GsZjkuia6oBG3NW+jZ3g4cH6/u5tAOeBrXC2LpCj6+Rsteqx0jc0Vo0UHa2mpqa8V2lqhEjHMJIxAioNCKimR2Fc3e2gdklbRjepcBQFmrL7TdR79fFWRua+lb4LYIYYhHI+Z3ZeKExsbQyOB2ZUFOKgr56Nntq6zSB3sPyPJ2o86d6i7bo1brA/rIqupX6yLPLbibrHmOKl7n6QZnjqnQ9ZK7ssLTQFxFBiGwVzJCyYNzo4sc7nOfO55bCSxjXEnC/U+ldoGXMr0EuWldtlEUYaAAcy6laFzjiecyTmSTrWW1ztjY57jRrQSe4IZOK6T71AYyztObjjdwA9EHdU5/hXmykL6vF1omfI71jkNzR6I8FoLilLWdz2GDw/QUVB7dr5v5YoVRFVaHTYoqKqIalFaVcVQrBgsKltGLOX2huZAbVxoSNWWscSFErtND7FgiMh1vOX3Rq8yVz4ur0dJ22vJd/6OXET1YMnQyp1L1PRa6vo8ADh23dp/A7ByHnVczoPceN/XyDsNPYr6zht7h7+5egrbRWF1I9JLa9nL9+nM87iqus9VBERW5yBERAEREAVrm1FDqVyIDzzSG6jZ35VLHeid3sniPNRTXL0+22VsrHMeKgjw3EcQvKdMWS2BrnBhfnkdgGxx4KpraPnKolSV77thpLJXLrXa44m4pHho4n3b1ybukCdsn1bWmJpoGuBxOHF1ciuWvC3yTuxSuxEatw4AbFrL0+jNCU8OnKr1pNW7Fy337X4HFOu79U9hufTWyz0Bd1TzQYX5VJ+y7UV0TZAdRBXz6tqxXlNCR1Ur2UNaNcabvR1HwXVV0TF/65W7H7rPyZJHFP7ke8FQ5uCL6ULThaCGkUDRUuJ9InaaZcyuAsOn1rZQPwSj2hRx5ty8lN2PpGjNOthc07S0gjzoVxT0diI/bfk/jJo16b3neArgOke/NVmYfakofBvdt8Ffb+keINIiikc6hoTQCvHOq8+ntBkJe4uc5xqTtJO9V+KpVaUVrRav8sXWiKdOrVc209Xd+e4sRUJSq4j09yqoSqVSqwYuFUq2qtqhq2VJVtUJVjnIRykbd2WQzStjG058AM3HwXsmiujvXkCmGBlATvp6reO87FzfRPog+0Yp3gtiPZDqZkA9oMJ3nKuyi9ws1nbG0MYA1rRQAbFGsL01RSn9Mdi4vjy3due7bRY/FdbUjuKwxhrQ1oAaBQAagBqWVEVoVAREQBERAEREAREQBad43fHOwxytxNPxFMluIgPANOujiex4poAZYMycNS+Mb3DWW8RWm3evPg9fYC4HS/ousltxSRf9NOc8cYGBx9uPIE8RQ7yVZ4fSDjlUz7ff3OWeGTzifP8AiVcS6G/eja9LKf8AtzOytA6Dt13VZ6Y8KcVydqbNCaTRSRnVR7HN/wBw1qyhjqL+4heHkblUqo1tvCr9OCnWJpvejXoJkjiVKitRz9pR305U+mhaVKtGcdWVmnuZvTjVpSU4NpreiTDt3grcajXWwFbFmc+Q0Y0u/W85Lz2K0dBdajLLg36Pf3+J6XCaZk1q11nxX5Xt4I2sSYlS0WaRho5vMZjxCtjje40DSeXx2Kp1WWqxUGr3LsStLlMXPo5LaJBG0gvOeCP6x4G8huTRxJovR7i6KHZGZjW7+sdjd3hjOz4uW6pSZz1NI0o778jyOGB7zRjXE7mgn3L0rQzonlmpLbCYo8iGD9o/bQk+gOOZ7l61cujVnsoHVsGID0iBUfdAybyCmlLGiltK6tpKc8oK3r+jXslmZExscbQ1jAGtaNQAFAAthEUxWhERAEREAREQBERAEREAREQBERAEREBH2+5LLOKTWeGQe3Gx3vCi36B3Wddgs3KJo9wXSIgOFtfRLc8hr9Fwn2JJWjwxU8ljHQ9c3+Wd++m/jXfIgOA/5O3N/l3fvpf4lc3ogukaoZP30v8AEu9RAcdF0Y3U3/xie+Wc+963rFoPdsTsTLHDirUF7cZB9nrK4eS6NEBjiha0Ua0NG4AD3LIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//9k="/>
  </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();