import ctEvents from 'ct-events'
import { typographyOption } from '../../../../static/js/customizer/sync/variables/typography'
import { updateAndSaveEl } from '../../../../static/js/customizer/sync'
import {
	getRootSelectorFor,
	assembleSelector,
	responsiveClassesFor,
	mutateSelector,
	getColumnSelectorFor,
} from '../../../../static/js/customizer/sync/helpers'

const getVariables = ({ itemId, fullItemId, panelType }) => ({
	cta_button_icon_size: {
		selector: assembleSelector(
			getRootSelectorFor({ itemId, fullItemId, panelType })
		),
		variable: 'theme-icon-size',
		responsive: true,
		unit: 'px',
	},

	headerCtaRadius: {
		selector: assembleSelector(
			getRootSelectorFor({ itemId, fullItemId, panelType })
		),
		type: 'spacing',
		variable: 'theme-button-border-radius',
		responsive: true,
		emptyValue: '',
	},

	headerCtaPadding: {
		selector: assembleSelector(
			mutateSelector({
				selector: getRootSelectorFor({ itemId, fullItemId, panelType }),
				operation: 'suffix',
				to_add: 'a',
			})
		),
		type: 'spacing',
		variable: 'theme-button-padding',
		responsive: true,
		emptyValue: '',
	},

	headerCtaMargin: {
		selector: assembleSelector(
			getRootSelectorFor({ itemId, fullItemId, panelType })
		),
		type: 'spacing',
		variable: 'margin',
		responsive: true,
		important: true,
	},

	...typographyOption({
		id: 'headerButtonFont',
		prefix: 'button',
		selector: assembleSelector(
			mutateSelector({
				selector: getRootSelectorFor({ itemId, fullItemId, panelType }),
				operation: 'suffix',
				to_add: '[class*="ct-button"]',
			})
		),
	}),

	header_button_text_horizontal_alignment: {
		selector: assembleSelector(
			mutateSelector({
				selector: getRootSelectorFor({ itemId, fullItemId, panelType }),
				operation: 'suffix',
				to_add: '.ct-button-text',
			})
		),
		variable: 'horizontal-alignment',
		responsive: true,
		unit: '',
	},

	...typographyOption({
		id: 'headerButtonSecondaryLabelFont',
		prefix: 'button',
		selector: assembleSelector(
			mutateSelector({
				selector: getRootSelectorFor({ itemId, fullItemId, panelType }),
				operation: 'suffix',
				to_add: '.ct-button-secondary-text',
			})
		),
	}),

	// default state
	headerButtonFontColor: [
		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'suffix',
					to_add: '.ct-button',
				})
			),
			variable: 'theme-button-text-initial-color',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'suffix',
					to_add: '.ct-button',
				})
			),
			variable: 'theme-button-text-hover-color',
			type: 'color:hover',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'suffix',
					to_add: '.ct-button-ghost',
				})
			),
			variable: 'theme-button-text-initial-color',
			type: 'color:default_2',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'suffix',
					to_add: '.ct-button-ghost',
				})
			),
			variable: 'theme-button-text-hover-color',
			type: 'color:hover_2',
			responsive: true,
		},
	],

	headerButtonSecondaryFontColor: [
		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'suffix',
					to_add: '.ct-button .ct-button-secondary-text',
				})
			),
			variable: 'theme-button-text-initial-color',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'suffix',
					to_add: '.ct-button .ct-button-secondary-text',
				})
			),
			variable: 'theme-button-text-hover-color',
			type: 'color:hover',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'suffix',
					to_add: '.ct-button-ghost .ct-button-secondary-text',
				})
			),
			variable: 'theme-button-text-initial-color',
			type: 'color:default_2',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'suffix',
					to_add: '.ct-button-ghost .ct-button-secondary-text',
				})
			),
			variable: 'theme-button-text-hover-color',
			type: 'color:hover_2',
			responsive: true,
		},
	],

	headerButtonForeground: [
		{
			selector: assembleSelector(
				getRootSelectorFor({ itemId, fullItemId, panelType })
			),
			variable: 'theme-button-background-initial-color',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: assembleSelector(
				getRootSelectorFor({ itemId, fullItemId, panelType })
			),
			variable: 'theme-button-background-hover-color',
			type: 'color:hover',
			responsive: true,
		},
	],

	// transparent state
	transparentHeaderButtonFontColor: [
		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button',
					}),
					operation: 'between',
					to_add: '[data-transparent-row="yes"]',
				})
			),

			variable: 'theme-button-text-initial-color',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button',
					}),
					operation: 'between',
					to_add: '[data-transparent-row="yes"]',
				})
			),

			variable: 'theme-button-text-hover-color',
			type: 'color:hover',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button-ghost',
					}),
					operation: 'between',
					to_add: '[data-transparent-row="yes"]',
				})
			),

			variable: 'theme-button-text-initial-color',
			type: 'color:default_2',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button-ghost',
					}),
					operation: 'between',
					to_add: '[data-transparent-row="yes"]',
				})
			),

			variable: 'theme-button-text-hover-color',
			type: 'color:hover_2',
			responsive: true,
		},
	],

	transparentHeaderButtonSecondaryFontColor: [
		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button .ct-button-secondary-text',
					}),
					operation: 'between',
					to_add: '[data-transparent-row="yes"]',
				})
			),

			variable: 'theme-button-text-initial-color',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button .ct-button-secondary-text',
					}),
					operation: 'between',
					to_add: '[data-transparent-row="yes"]',
				})
			),

			variable: 'theme-button-text-hover-color',
			type: 'color:hover',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button-ghost .ct-button-secondary-text',
					}),
					operation: 'between',
					to_add: '[data-transparent-row="yes"]',
				})
			),

			variable: 'theme-button-text-initial-color',
			type: 'color:default_2',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button-ghost .ct-button-secondary-text',
					}),
					operation: 'between',
					to_add: '[data-transparent-row="yes"]',
				})
			),

			variable: 'theme-button-text-hover-color',
			type: 'color:hover_2',
			responsive: true,
		},
	],

	transparentHeaderButtonForeground: [
		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'between',
					to_add: '[data-transparent-row="yes"]',
				})
			),

			variable: 'theme-button-background-initial-color',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'between',
					to_add: '[data-transparent-row="yes"]',
				})
			),

			variable: 'theme-button-background-hover-color',
			type: 'color:hover',
			responsive: true,
		},
	],

	// sticky state
	stickyHeaderButtonFontColor: [
		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button',
					}),
					operation: 'between',
					to_add: '[data-sticky*="yes"]',
				})
			),
			variable: 'theme-button-text-initial-color',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button',
					}),
					operation: 'between',
					to_add: '[data-sticky*="yes"]',
				})
			),
			variable: 'theme-button-text-hover-color',
			type: 'color:hover',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button-ghost',
					}),
					operation: 'between',
					to_add: '[data-sticky*="yes"]',
				})
			),
			variable: 'theme-button-text-initial-color',
			type: 'color:default_2',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button-ghost',
					}),
					operation: 'between',
					to_add: '[data-sticky*="yes"]',
				})
			),
			variable: 'theme-button-text-hover-color',
			type: 'color:hover_2',
			responsive: true,
		},
	],

	stickyHeaderButtonSecondaryFontColor: [
		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button .ct-button-secondary-text',
					}),
					operation: 'between',
					to_add: '[data-sticky*="yes"]',
				})
			),
			variable: 'theme-button-text-initial-color',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button .ct-button-secondary-text',
					}),
					operation: 'between',
					to_add: '[data-sticky*="yes"]',
				})
			),
			variable: 'theme-button-text-hover-color',
			type: 'color:hover',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button-ghost .ct-button-secondary-text',
					}),
					operation: 'between',
					to_add: '[data-sticky*="yes"]',
				})
			),
			variable: 'theme-button-text-initial-color',
			type: 'color:default_2',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: mutateSelector({
						selector: getRootSelectorFor({
							itemId,
							fullItemId,
							panelType,
						}),
						operation: 'suffix',
						to_add: '.ct-button-ghost .ct-button-secondary-text',
					}),
					operation: 'between',
					to_add: '[data-sticky*="yes"]',
				})
			),
			variable: 'theme-button-text-hover-color',
			type: 'color:hover_2',
			responsive: true,
		},
	],

	stickyHeaderButtonForeground: [
		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'between',
					to_add: '[data-sticky*="yes"]',
				})
			),
			variable: 'theme-button-background-initial-color',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: assembleSelector(
				mutateSelector({
					selector: getRootSelectorFor({
						itemId,
						fullItemId,
						panelType,
					}),
					operation: 'between',
					to_add: '[data-sticky*="yes"]',
				})
			),
			variable: 'theme-button-background-hover-color',
			type: 'color:hover',
			responsive: true,
		},
	],

	// footer button
	footer_button_horizontal_alignment: {
		selector: assembleSelector(
			mutateSelector({
				selector: getRootSelectorFor({
					itemId,
					fullItemId,
					panelType: 'footer',
				}),
				operation: 'replace-last',
				to_add: getColumnSelectorFor({ itemId: fullItemId }),
			})
		),
		variable: 'horizontal-alignment',
		responsive: true,
		unit: '',
	},

	footer_button_vertical_alignment: {
		selector: assembleSelector(
			mutateSelector({
				selector: getRootSelectorFor({
					itemId,
					fullItemId,
					panelType: 'footer',
				}),
				operation: 'replace-last',
				to_add: getColumnSelectorFor({ itemId: fullItemId }),
			})
		),
		variable: 'vertical-alignment',
		responsive: true,
		unit: '',
	},
})

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	(variableDescriptors) => {
		variableDescriptors['button'] = ({ itemId, fullItemId }) => {
			return getVariables({ itemId, fullItemId, panelType: 'header' })
		}
	}
)

ctEvents.on(
	'ct:footer:sync:collect-variable-descriptors',
	(variableDescriptors) => {
		variableDescriptors['button'] = ({ itemId, fullItemId }) =>
			getVariables({ itemId, fullItemId, panelType: 'footer' })
	}
)

ctEvents.on(
	'ct:header:sync:item:button',
	({ itemId, optionId, optionValue, values: { icon_position } }) => {
		const selector = `[data-id="${itemId}"]`

		if (optionId === 'header_button_type') {
			updateAndSaveEl(selector, (el) => {
				const button = el.querySelector('[class*="ct-button"]')
				button.classList.remove('ct-button', 'ct-button-ghost')

				button.classList.add(
					optionValue === 'type-1' ? 'ct-button' : 'ct-button-ghost'
				)
			})
		}

		if (optionId === 'visibility') {
			updateAndSaveEl(selector, (el) =>
				responsiveClassesFor({ ...optionValue, desktop: true }, el)
			)
		}

		if (optionId === 'header_button_size') {
			updateAndSaveEl(selector, (el) => {
				el.querySelector('[class*="ct-button"]').dataset.size =
					optionValue
			})
		}

		if (optionId === 'header_button_text') {
			updateAndSaveEl(selector, (el) => {
				if (el.querySelector('.ct-button-secondary-text')) {
					const maybeSmallTag = el.querySelector(
						'.ct-button-secondary-text'
					)

					el.querySelector('.ct-button-text').innerHTML =
						optionValue + maybeSmallTag.outerHTML
				} else {
					const maybeIcon = el.querySelector(
						'[class*="ct-button"] .ct-icon'
					)
					let icon = ''

					if (maybeIcon) {
						icon = maybeIcon.outerHTML
					}

					el.querySelector('[class*="ct-button"]').innerHTML =
						icon_position === 'right'
							? `${optionValue}${icon}`
							: `${icon}${optionValue}`
				}
			})
		}

		if (optionId === 'header_button_secondary_text') {
			updateAndSaveEl(selector, (el) => {
				el.querySelector('.ct-button-secondary-text').innerHTML =
					optionValue
			})
		}

		if (optionId === 'header_button_link') {
			updateAndSaveEl(selector, (el) => {
				el.querySelector('[class*="ct-button"]').href = optionValue
			})
		}
	}
)

ctEvents.on(
	'ct:footer:sync:item:button',
	({ itemId, optionId, optionValue }) => {
		const selector = `.ct-footer [data-id="${itemId}"]`
		const el = document.querySelector(selector)

		if (optionId === 'header_button_type') {
			const button = el.querySelector('[class*="ct-button"]')
			button.classList.remove('ct-button', 'ct-button-ghost')

			button.classList.add(
				optionValue === 'type-1' ? 'ct-button' : 'ct-button-ghost'
			)
		}

		if (optionId === 'visibility') {
			responsiveClassesFor(optionValue, el)
		}

		if (optionId === 'header_button_size') {
			el.querySelector('[class*="ct-button"]').dataset.size = optionValue
		}

		if (optionId === 'header_button_text') {
			el.querySelector('[class*="ct-button"]').innerHTML = optionValue
		}

		if (optionId === 'header_button_link') {
			el.querySelector('[class*="ct-button"]').href = optionValue
		}
	}
)
