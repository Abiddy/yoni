const body = document.body
const burger = document.querySelector('.burger')
const menu = document.querySelector('#mobile-menu')
const menuInner = document.querySelector('.menu__inner')
const leafLeft = document.querySelector('.leaf--left')
const leafRight = document.querySelector('.leaf--right')
const wordmark = document.querySelector('.hero__wordmark')
const building = document.querySelector('.hero__building')

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const desktopMq = window.matchMedia('(min-width: 781px)')

function setMenuOpen(open) {
  if (!burger || !menu) return

  if (open) {
    body.classList.remove('is-closing')
    body.classList.add('is-open')
    menu.hidden = false
    burger.setAttribute('aria-expanded', 'true')
    burger.setAttribute('aria-label', 'Close menu')
  } else {
    body.classList.add('is-closing')
    body.classList.remove('is-open')
    burger.setAttribute('aria-expanded', 'false')
    burger.setAttribute('aria-label', 'Open menu')

    window.setTimeout(() => {
      body.classList.remove('is-closing')
      if (!body.classList.contains('is-open')) {
        menu.hidden = true
      }
    }, 350)
  }
}

function toggleMenu() {
  setMenuOpen(!body.classList.contains('is-open'))
}

burger?.addEventListener('click', toggleMenu)

menu?.addEventListener('click', (event) => {
  if (!menuInner?.contains(event.target)) {
    setMenuOpen(false)
  }
})

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false))
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && body.classList.contains('is-open')) {
    setMenuOpen(false)
    burger?.focus()
  }
})

desktopMq.addEventListener('change', (event) => {
  if (event.matches) setMenuOpen(false)
})

let ticking = false

function updateParallax() {
  ticking = false
  if (reduceMotion.matches) return

  const y = window.scrollY

  // Wordmark behind house moves farther/faster for depth
  wordmark?.style.setProperty('--wordmark-y', `${y * 0.42}px`)
  // House drifts slower so title feels layered behind it
  building?.style.setProperty('--building-y', `${y * 0.14}px`)

  if (leafLeft && leafRight) {
    leafLeft.style.setProperty('--parallax-y', `${y * -0.28}px`)
    leafLeft.style.setProperty('--parallax-x', `${y * -0.06}px`)
    leafRight.style.setProperty('--parallax-y', `${y * -0.48}px`)
    leafRight.style.setProperty('--parallax-x', `${y * 0.08}px`)
  }
}

window.addEventListener(
  'scroll',
  () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(updateParallax)
  },
  { passive: true },
)

updateParallax()

const DATASETS = {
  speed: {
    title: 'Speed & Certainty',
    summary:
      'From first inquiry to cash offer, we keep timelines short and decisions clear — so you are never left waiting on uncertain buyers.',
    bars: [
      { label: 'Offer turnaround', value: 92, note: 'same-week responses' },
      { label: 'As-is closings', value: 88, note: 'no repair delays' },
      { label: 'Remote sellers supported', value: 76, note: 'out-of-area executors' },
      { label: 'Commitment-free consults', value: 100, note: 'always optional' },
    ],
  },
  condition: {
    title: 'Any Condition',
    summary:
      'Whether the home needs work or is turnkey, we evaluate as-is value and structure offers that protect your net proceeds.',
    bars: [
      { label: 'Distressed property readiness', value: 94, note: 'foreclosure / deferred maintenance' },
      { label: 'Probate pathway fluency', value: 86, note: 'estate sales experience' },
      { label: 'Trust & conservatorship', value: 81, note: 'complex title situations' },
      { label: 'Private / off-market deals', value: 78, note: 'discretion-first closings' },
    ],
  },
  process: {
    title: 'Process Clarity',
    summary:
      'Three simple steps — information session, discussion, cash offer — with transparent communication at every stage.',
    bars: [
      { label: 'Step clarity score', value: 90, note: 'homeowner understanding' },
      { label: 'Document readiness', value: 84, note: 'fewer surprises in escrow' },
      { label: 'Follow-up reliability', value: 93, note: 'prompt team callbacks' },
      { label: 'No-commission path', value: 100, note: 'keep more of your equity' },
    ],
  },
  support: {
    title: 'Local Support',
    summary:
      'Based in Commerce, CA with deep Southern California coverage — local knowledge when timing and trust matter most.',
    bars: [
      { label: 'Google rating strength', value: 98, note: '4.9 from 100 reviews' },
      { label: 'Local market fluency', value: 89, note: 'Commerce & surrounding cities' },
      { label: 'Family-first communication', value: 91, note: 'respect in hard moments' },
      { label: 'Direct access to Yoni', value: 87, note: 'call or text anytime' },
    ],
  },
}

class StatsSection {
  activeKey = 'speed'

  constructor() {
    this.el = document.querySelector('.stats')
    if (!this.el) return
    this.tabs = this.el.querySelectorAll('[data-stats-tab]')
    this.summary = this.el.querySelector('[data-stats-summary]')
    this.chart = this.el.querySelector('[data-stats-chart]')
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', () => this.setActive(tab.dataset.statsTab))
    })
    this.render()
  }

  setActive(key) {
    if (!DATASETS[key] || key === this.activeKey) return
    this.activeKey = key
    this.tabs.forEach((tab) => {
      const active = tab.dataset.statsTab === key
      tab.classList.toggle('is-active', active)
      tab.setAttribute('aria-selected', String(active))
    })
    this.render()
  }

  render() {
    const data = DATASETS[this.activeKey]
    this.summary?.classList.remove('is-visible')
    this.chart?.classList.remove('is-ready')

    window.setTimeout(() => {
      if (this.summary) {
        this.summary.textContent = data.summary
        this.summary.classList.add('is-visible')
      }
      if (!this.chart) return
      this.chart.innerHTML = `
        <div class="stats__chart-head">
          <span>${data.title}</span>
          <strong>Homeowner outcomes</strong>
        </div>
        <div class="stats__bars">
          ${data.bars
            .map(
              (bar, index) => `
            <article class="stats__bar-row" style="--bar-value: ${bar.value}%; --bar-delay: ${index * 90}ms;">
              <div class="stats__bar-label">
                <strong>${bar.label}</strong>
                <span>${bar.note}</span>
              </div>
              <div class="stats__track" aria-hidden="true">
                <div class="stats__bar"></div>
                <span class="stats__value">${bar.value}%</span>
              </div>
            </article>`,
            )
            .join('')}
        </div>
      `
      requestAnimationFrame(() => this.chart.classList.add('is-ready'))
    }, 120)
  }
}

new StatsSection()
