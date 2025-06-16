import $ from 'jquery';

export function initProgressBar() {
    let scrollHandler, resizeHandler;
    if ('max' in document.createElement('progress')) {
        const progressBar = $('progress');
        const getMax = () => $(document).height() - $(window).height();
        const getValue = () => $(window).scrollTop();

        progressBar.attr('max', getMax());
        scrollHandler = () => progressBar.attr('value', getValue());
        resizeHandler = () => {
            progressBar.attr('max', getMax());
            progressBar.attr('value', getValue());
        };

        $(document).on('scroll', scrollHandler);
        $(window).on('resize', resizeHandler);

        // Cleanup function
        return () => {
            $(document).off('scroll', scrollHandler);
            $(window).off('resize', resizeHandler);
        };
    } else {
        const progressBar = $('.progress-bar');
        let max = $(document).height() - $(window).height();
        let value, width;

        const getValue = () => $(window).scrollTop();
        const getWidth = () => {
            value = getValue();
            width = (value / max) * 100;
            return width + '%';
        };
        const setWidth = () => progressBar.css('width', getWidth());

        scrollHandler = setWidth;
        resizeHandler = () => {
            max = $(document).height() - $(window).height();
            setWidth();
        };

        $(document).on('scroll', scrollHandler);
        $(window).on('resize', resizeHandler);

        // Cleanup function
        return () => {
            $(document).off('scroll', scrollHandler);
            $(window).off('resize', resizeHandler);
        };
    }
}

/*
$(document).ready(function() {
    var getMax = function() {
        return $(document).height() - $(window).height();
    }

    var getValue = function() {
        return $(window).scrollTop();
    }

    if('max' in document.createElement('progress')) {
        var progressBar = $('progress');
        progressBar.attr('max', getMax());

        $(document).on('scroll', function() {
            progressBar.attr('value', getValue());
        });

        $(window).resize(function() {
            progressBar.attr('max', getMax());
            progressBar.attr('value', getValue());
        });
    }
    else {
        var progressBar = $('.progress-bar'),
        max = getMax(),
        value, width;

        var getWidth = function() {
            value = getValue();
            width = (value / max) * 100;
            return width + '%';
        }

        var setWidth = function() {
            progressBar.css('width', getWidth());
        }

        $(document).on('scroll', setWidth);
        $(window).on('resize', function() {
            max = getMax();
            setWidth();
        });
    }
})
    */