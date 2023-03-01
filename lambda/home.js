const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "Notas";

const datasource = {
    "multipleChoiceTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://image.slidesharecdn.com/unisuam-140926155615-phpapp02/85/case-hybrid-mobile-app-unisuam-1-638.jpg?cb=1671818227",
            "titleText": "",
            "primaryText": "",
          
            "choiceListType": "number",
            "headerAttributionImage": "https://seeklogo.com/images/U/unisuam-logo-F9DC14A346-seeklogo.com.png",
            "footerHintText": "Universidade Rodrigues, Compromisso para a vida toda!"
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

 exports.FUNtelaHome = function(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
 };