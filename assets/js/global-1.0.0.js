/**
 * Created by bdogaru on 25/02/2018
 */

var moveReviews = function (_direction) {
    var _list = $('#review_box').find('.list > ul');
    if (_direction == 'l') {
        _list.animate({
            'left': '-100%'
        }, function () {
            _list.children().first().appendTo(_list);
            _list.css({
                'left': '0'
            })
        })
    } else {
        _list.children().last().prependTo(_list);
        _list.css({
            'left': '-100%'
        });
        _list.animate({
            'left': 0
        })
    }
};

$(function () {

    $(document).on('click', '.reviews-controls i', function () {
        var _direction = $(this).data('direction');
        moveReviews(_direction);
    });

    $(document).on('click', '#sitemap .links .top', function () {
        $(this).next().slideToggle();
        $(this).find('i').toggleClass('icon-plus').toggleClass('icon-dash');
    });

});