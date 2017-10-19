var formMngmtAttrCount = 4;  // See django documentation: https://goo.gl/eRxHk3
                             // The fields from the formset.management_form are hidden inputs with the following id's:
                             //     id_YOUR_FORMSET_PREFIX-TOTAL_FORMS
                             //     id_YOUR_FORMSET_PREFIX-INITIAL_FORMS
                             //     id_YOUR_FORMSET_PREFIX-MIN_NUM_FORMS
                             //     id_YOUR_FORMSET_PREFIX-MAX_NUM_FORMS
$(document).ready(function() {
  $('#btn-createOS').click(function() {

    // Grab how many Oddens de Serviço has already been added.
     var itemsAdded = ($('#YOUR_FORMSET_PREFIX-formset-container').children().length)-formMngmtAttrCount;

    if (itemsAdded > 14) { // Remember that the itemsAdded starts with 0
        alert("You have reached the items aadded!");
      } else {

        // Grab script with a template for the HTML block you want to inject
        var tmplMarkup = $('#YOUR_FORMSET_PREFIX-template').html();

        // Replace __prefix__ with the proper id count to be used in formset validation
        // See w3schools for referece: https://www.w3schools.com/jsref/jsref_replace.asp
        var prefixRepalcedTmpl = tmplMarkup.replace(/__prefix__/g, itemsAdded);

        $('div#YOUR_FORMSET_PREFIX-formset-container').append(compiledTmpl);

        console.log(itemsAdded);
        // Updating TOTAL_FORM count. Check the documentation: https://goo.gl/eRxHk3
        $('#id_YOUR_FORMSET_PREFIX-TOTAL_FORMS').attr('value', (itemsAdded+1)); // TODO: Check why is starting with 6.
      }
  });
});
