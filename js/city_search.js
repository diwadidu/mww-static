// var currentItem = -1;
//
// $(document).ready(function() {
//     $('#citysearch').bind('keyup', function(e) {
//
//         var searchString = $('#citysearch').val();
//         if (searchString.length < 1) {
//             $('#autocomplete').css('display','none');
//         }
//         else {
//
//             switch (e.keyCode) {
//
//                 case 13:
//                     if (currentItem < 0) gotoPage(e, searchString);
//                     else gotoPage(e, $('#autocomplete li').eq(currentItem));
//                     break;
//
//                 case 37:
//                 case 39:
//                     break;
//
//
//                 case 38:
//                     if (currentItem == -1) return;
//                     currentItem--;
//                     $('#autocomplete li').css('background','transparent')
//                             .eq(currentItem).css('background','#ddd');
//                     break;
//
//                 case 40:
//                     if (currentItem == $('#autocomplete li').length -1 ) return;
//                     currentItem++;
//                     $('#autocomplete li').css('background','transparent')
//                             .eq(currentItem).css('background','#ddd');
//                     break;
//
//                 default:
//
//                     var options = {
//                         data: 'city=' + searchString,
//                         dataType: 'json',
//                         success: function(data, textStatus) {
//                             $('#autocomplete').empty();
//                             var numEntries = data.length;
//                             var html = '';
//                             if (numEntries > 0) {
//                                 for (var i=0; i<numEntries; i++) {
//                                     html += '<li>' + data[i]['location'] + ' (' + data[i].num + ')</li>';
//                                 }
//                                 $('#autocomplete').css('display','block').append(html);
//                             }
//                             else $('#autocomplete').css('display','none');
//                             currentItem = -1
//                             //console.log(data);
//
//                         },
//                         type: 'post',
//                         url: '/events/city_search.php'
//                     };
//                     $.ajax(options);
//                     break;
//             }
//         }
//     });
//
//     $('#autocomplete li').live('click', function(e) {
//         gotoPage(e, this);
//     }).live('mouseover', function() {
//         $(this).css('background-color','#ddd').css('cursor','pointer');
//     }).live('mouseout', function() {
//         $(this).css('background-color','transparent');
//     });
//
//
//     $('#citysearch-submit').bind('click', function() {
//         window.location = '/events/city.php?c=' + $('#citysearch').val();
//     });
//
// });
//
// var gotoPage = function(e, node) {
//     e.preventDefault();
//     if (typeof node != "string") var cityState = $(node).text().split(' (')[0];
//     else cityState = node;
// //    console.log(cityState);
//     window.location = '/events/city.php?c=' + cityState;
// };
