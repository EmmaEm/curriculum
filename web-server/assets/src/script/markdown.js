
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

const upsert = (userId, moduleId, rating) => {
  $.ajax({
    type: 'POST',
    url: '/ratings',
    data: {userId, moduleId, rating},
    success: $('.star-rating').load(location.href+' .star-rating>*','')
  })
}

$(document).on('click', '.stars', event => {
  const userId = $('.inputUserId')[0].value
  const moduleId = $('.inputModuleId')[0].value
  const rating = event.toElement.attributes['data-star-number'].value
  upsert(userId, moduleId, rating)
})
