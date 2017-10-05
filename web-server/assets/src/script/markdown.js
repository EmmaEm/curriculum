
// All external links from markdown files are set to open in a new tab
$(() => {
  $('.markdown-body a[href]').each((i, link) => {
    if (link.hostname === 'curriculum.learnersguild.org') {
      link.href = link.href.replace('curriculum.learnersguild.org', location.hostname)
    }
    if (location.hostname !== link.hostname) {
      $(link).attr('target', '_blank')
    }
  })
})

// console.log($('.star-rating'));
$(document).on('click', '.stars', event => {
  console.log(event.toElement.attributes['data-star-number'].value)
})
