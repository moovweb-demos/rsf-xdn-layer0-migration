import React from 'react'
import {
  AnalyticsProvider,
  // GoogleAnalytics,
  // GoogleTagManager,
  // FirebasePerformanceMonitoring,
} from 'react-storefront-analytics'

const Analytics = ({ children }) => (
  <AnalyticsProvider>
    {children}
  </AnalyticsProvider>
)

export default Analytics
