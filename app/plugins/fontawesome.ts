import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent FA from injecting CSS at runtime — we import it statically above
config.autoAddCss = false
