happy
.go('input[name=campaignName]').set('My Campaign')
.go('select[name=clients]').set(/Amar Test Client USD/).wait(500)
.go('select[name=products]').set(/Amar Test Product USD/)
.go('select[name=accounts]').set(/BrighterOptionUSD@gmail.com/)
.go('[data-sb-group-member]',/Website/).click()
.go('[data-sb-group-member]',/Website Conversions/).click()
.go('[data-sb-group-member]',/Page Post/).click()
.go('[data-sb-group-member]',/Nutrition/).click()
.go( 'button.cta-btn.primary.icon-btn',/Define an Audience/).click();