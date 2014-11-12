$(function () {
    $('#chart1').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Ocorrências de Hashtags a favor de Dilma'
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Dilma Hashtags',
            data: [
                ['#DilmaÉFoda',   1],
                ['#DilminhaDenovo',       1],
                ['#Dilmassa', 1],
                ['#DilmaMuda',    4],
                ['#SouCoraçãoValente',     6],
                ['#Dilmando13',   7],
                ['#Juventude13',   9],
                ['#DilminhaNovamente',   10],
                ['#DilmaPT',   36],
                ['#MelhorComDilma',   47],
                ['#SomosTodosCoraçõesValentes',   51],
                ['#DilmaDenovoComAForçaDoPovo',   58],
                ['#Dilma',   70],
                ['#Dilminha13',   76],
                ['#Dilminha',   129],
                ['#Voto13',   160],
                ['#Dilmãe',   166],
                ['#SouDilma',   168],
                ['#DilmaMudaMais',   171],
                ['#13Neles',   173],
                ['#SouDilma13',   178],
                ['#Mais4Anos',   178],
                ['#13Beijos',   180],
                ['#Dilmais',   242],
                ['#DilmaDeNovo',   268],
                ['#Dimais4Anos',   408],
                ['#MudaMais', 413],
                ['#Dilma13',   534],
                ['#SomosTodosDilma',   691],
                ['#DilmaNovamente',   792],
            ]
        }]
    });
});

$(function () {
    $('#chart2').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Hashtags com Retweets a favor de Dilma'
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Dilma Hashtags',
            data: [
                ['#DilmaMuda',    1],
                ['#Dilmando13',   1],
                ['#Juventude13',   2],
                ['#DilminhaNovamente',   16],
                ['#DilmaPT',   41],
                ['#MelhorComDilma',   51],
                ['#SomosTodosCoraçõesValentes',   168],
                ['#DilmaDenovoComAForçaDoPovo',   53],
                ['#Dilma',   504],
                ['#Dilminha13',   724],
                ['#Dilminha',   181],
                ['#Voto13',   923],
                ['#Dilmãe',   115],
                ['#SouDilma',   744],
                ['#DilmaMudaMais',   462],
                ['#13Neles',   383],
                ['#SouDilma13',   245],
                ['#Mais4Anos',   428],
                ['#13Beijos',   653],
                ['#Dilmais',   286],
                ['#DilmaDeNovo',   1432],
                ['#Dimais4Anos',   1166086],
                ['#MudaMais', 865],
                ['#Dilma13',   18480],
                ['#SomosTodosDilma',   7396],
                ['#DilmaNovamente',   69511],
            ]
        }]
    });
});

$(function () {
    $('#chart3').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Hashtags Favoritas a favor de Dilma'
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Dilma Hashtags',
            data: [
                ['#DilmaMuda',    1],
                ['#Dilmando13',   1],
                ['#Juventude13',   2],
                ['#DilminhaNovamente',   2],
                ['#DilmaPT',   7],
                ['#MelhorComDilma',   7],
                ['#SomosTodosCoraçõesValentes',   18],
                ['#DilmaDenovoComAForçaDoPovo',   19],
                ['#Dilma',   4],
                ['#Dilminha13',   25],
                ['#Dilminha',   45],
                ['#Voto13',   32],
                ['#Dilmãe',   58],
                ['#SouDilma',   62],
                ['#DilmaMudaMais',   27],
                ['#13Neles',   50],
                ['#SouDilma13',   54],
                ['#Mais4Anos',   59],
                ['#13Beijos',   38],
                ['#Dilmais',   54],
                ['#DilmaDeNovo',   82],
                ['#Dimais4Anos',   211],
                ['#MudaMais', 61],
                ['#Dilma13',   74],
                ['#SomosTodosDilma',   29],
                ['#DilmaNovamente',   152],
            ]
        }]
    });
});

$(function () {
    $('#chart4').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Tweets mais populares a favor de Dilma'
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Dilma Hashtags',
            data: [
                ['RT @dilmabr: Muito obrigada! #Dilmais4anos http://t.co/LcPPKMOgHz', 1158274],
                ['RT @jooseanee: 1 semana da vitória da Dilma e até hoje tem tucano que não aceita a derrota do Aécio. Aceita que dói menos! #DilmaNovamente', 15622],
                ['RT @Greenhalgh_: Os carcereiros não podiam imaginar que eles mudariam a história do Brasil. #Dilma13 #Lula http://t.co/vCWuxtf6HT', 9064],
                ['#DilmaNovamente #Dilmais4anos', 5583],
                ['RT @MarcianoBrito13: Enquanto o mundo todo tá parado esperando a crise passar, olha só o que está sendo feito no BR  #DilmaNovamente http:/…', 5167],
                ['RT @dilmabr: Brasil, mais uma vez essa filha tua não fugirá da luta. Viva o Brasil! #DilmaNovamente', 4834],
                ['RT @ReSorrah: Dilma ganhou em Minas, justiça foi feita os mineiros mostraram quem manda #DilmaNovamente', 2295],
                ['RT @leonardomotta79: Olhando o avião do Lobão decolar #DilmaNovamente http://t.co/2jc6m6mcwU', 2218],
                ['RT @engajarte: RT @Greenhalgh_: Os carcereiros não podiam imaginar que eles mudariam a história do Brasil. #Dilma13 #Lula http://t.co/UhM72…', 2141],
                ['RT @dilmabr: Essa presidenta aqui está disposta ao diálogo e esse será o primeiro compromisso do meu novo mandato. #DilmaNovamente http://t…', 1956],
                ['RT @dilmabr: Bom voto a todos! #DilmaNovamente http://t.co/mL3KD8xqwj', 1845],
                ['RT @blogdilmabr: Dilma e o neto Gabriel que é pedaço do seu Coração Valente #ConfioEmDilma #Dilmais4anos http://t.co/zUB9Vfx9QN', 1696],
                ['RT @ReSorrah: Pelo direito de nos manisfestar, ter liberdade de expressão, respeito, educação, cidadania, democracia! #DilmaNovamente', 1502],
                ['RT @LulapeloBrasil: “Dilma tem o povo brasileiro e grande parte da sociedade ao lado dela. O país aprendeu a valorizar a democracia”, Lula …', 1458],
                ['RT @dilmabr: O Brasil é um país q cresce e faz todo mundo crescer. C/ olhar especial p/ mulheres, negros e jovens #SomosTodosDilma http://t…', 1386]
            ]
        }]
    });
});