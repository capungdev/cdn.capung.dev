function capung_whats(_0x4b3bx2) {
    var _0x4b3bx3 = !0;
    if (jQuery('#' + _0x4b3bx2 + ' .must').each(function () {
            '' != $.trim(jQuery(this).val()) && 'default' != $.trim(jQuery(this).val()) || jQuery(this).addClass('focus')
        }), jQuery('#' + _0x4b3bx2 + ' .must').each(function () {
            return '' == $.trim(jQuery(this).val()) ? (_0x4b3bx3 = !1, jQuery(this).parents('label').find('.validasi').addClass('show'), jQuery(this).focus(), !1) : 'default' == $.trim(jQuery(this).val()) ? (_0x4b3bx3 = !1, jQuery(this).parents('label').find('.validasi').addClass('show'), !1) : void(0)
        }), _0x4b3bx3 === !0) {
        var _0x4b3bx4 = '',
            _0x4b3bx5 = 'https://api.whatsapp.com/send';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (_0x4b3bx5 = 'whatsapp://send'), 'CpWa' === _0x4b3bx2) {
            var _0x4b3bx6 = 62,
                _0x4b3bx7 = 83834426998,
                _0x4b3bx8 = 'Hallo Admin',
                _0x4b3bx9 = jQuery('#' + _0x4b3bx2 + ' .messenger').val(),
                _0x4b3bx4 = _0x4b3bx5 + '?phone=' + _0x4b3bx6 + _0x4b3bx7 + '&text=*' + _0x4b3bx8 + '*%0A%0A💬 ' + _0x4b3bx9
        };
        jQuery(this).attr('href', _0x4b3bx4);
        var _0x4b3bxa = 960,
            _0x4b3bxb = 540,
            _0x4b3bxc = Number(screen.width / 2 - _0x4b3bxa / 2),
            _0x4b3bxd = Number(screen.height / 2 - _0x4b3bxb / 2),
            _0x4b3bxe = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + _0x4b3bxa + ', height=' + _0x4b3bxb + ', top=' + _0x4b3bxd + ', left=' + _0x4b3bxc);
        return _0x4b3bxe.focus(), !1
    }
}
$('.btnchat').click(function () {
    $('.chat-wrap').css('margin-bottom', '0'), $('.chat-wrap').css('transition', 'all 0.5s ease'), $('.btnchat').css('display', 'none')
}), $('.close').click(function () {
    $('.chat-wrap').css('margin-bottom', '-450px'), $('.chat-wrap').css('transition', 'all 1s ease'), $('.btnchat').css('display', 'block')
}), $(function () {
    $('.menu-icon').click(function () {
        $(this).toggleClass('hiden'), $('.nav-main').toggleClass('show')
    })
}), window.addEventListener('load', function () {
    jQuery('.CP_wA input, .CP_wA textarea').on('keypress', function () {
        13 === event.keyCode && jQuery(this).parents('.CP_wA').find('.submit').trigger('click')
    }), jQuery('.CP_wA .must').each(function () {
        title = jQuery(this).attr('placeholder'), label = jQuery(this).parents('label'), jQuery('<span class="validasi"><b>' + title + '</b> (Required)</span>').appendTo(label)
    }), jQuery('.CP_wA .must').keyup(function () {
        '' != jQuery(this).val() && (jQuery(this).removeClass('focus'), jQuery(this).parents('label').find('.validasi').removeClass('show'))
    }), jQuery('.CP_wA select').change(function () {
        jQuery(this).removeClass('focus'), jQuery(this).parents('label').find('.validasi').removeClass('show')
    })
}, !1), jQuery('.CP_wA .submit').on('click', function () {
    return capung_whats(jQuery(this).parents('.whatsapp_capung').attr('id')), !1
})
