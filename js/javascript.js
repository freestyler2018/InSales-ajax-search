jQuery(document).ready(function($) {
  //Поиск
  $('.js-search-input').autocomplete({
    serviceUrl: '/search_suggestions',
    onSelect: function (suggestion) {
      window.location.href = '/product_by_id/' + suggestion.data;
    },
    params: {
      account_id: {{ account.id }},
      locale:'{{ language.locale }}',
      hide_items_out_of_stock: true
    },
  });
});
