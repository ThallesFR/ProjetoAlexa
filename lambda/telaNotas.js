const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "telaNotas";

const datasource = {
    "multipleChoiceTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://img.freepik.com/vetores-gratis/fundo-de-gradiente-de-linhas-azuis-dinamicas_23-2148995756.jpg",
            "titleText": "Suas notas deste semestre",
            "primaryText": "",
            "choices": [
                "AC: 9.3",
                "AI: 9.1",
                "Média: 9.2"
            ],
            "choiceListType": "number",
            "headerAttributionImage": "https://seeklogo.com/images/U/unisuam-logo-F9DC14A346-seeklogo.com.png",
            "footerHintText": "Universidade UNISUAM, Compromisso para a vida toda!"
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

exports.ExibirTelaNotas = function(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
};
