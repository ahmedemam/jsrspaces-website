/**
 * Visitor Tracking Utility
 * Tracks unique website visitors using localStorage and browser fingerprinting
 */

const VISITOR_ID_KEY = 'jsrspaces_visitor_id';
const VISITOR_FIRST_VISIT_KEY = 'jsrspaces_first_visit';
const VISITOR_LAST_VISIT_KEY = 'jsrspaces_last_visit';
const VISITOR_COUNT_KEY = 'jsrspaces_visit_count';

export interface VisitorData {
  visitorId: string;
  firstVisit: string;
  lastVisit: string;
  visitCount: number;
  isNewVisitor: boolean;
}

/**
 * Generate a unique visitor ID based on browser fingerprint
 */
function generateVisitorId(): string {
  // Try to get existing ID from localStorage
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);
  
  if (visitorId) {
    return visitorId;
  }
  
  // Generate a new ID using browser fingerprint
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width,
    screen.height,
    screen.colorDepth,
    new Date().getTimezoneOffset(),
    navigator.hardwareConcurrency || 0,
    navigator.platform,
  ].join('|');
  
  // Create a simple hash from the fingerprint
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Combine with timestamp for uniqueness
  visitorId = `visitor_${Math.abs(hash)}_${Date.now()}`;
  
  // Store in localStorage
  localStorage.setItem(VISITOR_ID_KEY, visitorId);
  
  return visitorId;
}

/**
 * Track a visitor visit
 * Returns visitor data including whether this is a new visitor
 */
export function trackVisitor(): VisitorData {
  const visitorId = generateVisitorId();
  const now = new Date().toISOString();
  
  // Get existing visit data
  const firstVisit = localStorage.getItem(VISITOR_FIRST_VISIT_KEY) || now;
  const lastVisit = localStorage.getItem(VISITOR_LAST_VISIT_KEY);
  const visitCountStr = localStorage.getItem(VISITOR_COUNT_KEY);
  const visitCount = visitCountStr ? parseInt(visitCountStr, 10) : 0;
  
  // Determine if this is a new visitor (first visit ever)
  const isNewVisitor = !lastVisit;
  
  // Update visit data
  if (isNewVisitor) {
    localStorage.setItem(VISITOR_FIRST_VISIT_KEY, firstVisit);
  }
  
  localStorage.setItem(VISITOR_LAST_VISIT_KEY, now);
  localStorage.setItem(VISITOR_COUNT_KEY, (visitCount + 1).toString());
  
  return {
    visitorId,
    firstVisit,
    lastVisit: now,
    visitCount: visitCount + 1,
    isNewVisitor,
  };
}

/**
 * Get current visitor data without tracking a new visit
 */
export function getVisitorData(): VisitorData | null {
  const visitorId = localStorage.getItem(VISITOR_ID_KEY);
  
  if (!visitorId) {
    return null;
  }
  
  const firstVisit = localStorage.getItem(VISITOR_FIRST_VISIT_KEY);
  const lastVisit = localStorage.getItem(VISITOR_LAST_VISIT_KEY);
  const visitCountStr = localStorage.getItem(VISITOR_COUNT_KEY);
  
  if (!firstVisit || !lastVisit || !visitCountStr) {
    return null;
  }
  
  return {
    visitorId,
    firstVisit,
    lastVisit,
    visitCount: parseInt(visitCountStr, 10),
    isNewVisitor: false,
  };
}

/**
 * Get total unique visitors count (stored in localStorage)
 * This is a simple count - for production, this should be sent to a backend
 */
export function getUniqueVisitorCount(): number {
  // This is a simple implementation
  // In production, you'd want to send this to a backend API
  const count = localStorage.getItem('jsrspaces_unique_visitors_count');
  return count ? parseInt(count, 10) : 0;
}

/**
 * Increment unique visitor count
 * Should be called when a new visitor is detected
 */
export function incrementUniqueVisitorCount(): void {
  const count = getUniqueVisitorCount();
  localStorage.setItem('jsrspaces_unique_visitors_count', (count + 1).toString());
}

/**
 * Send visitor data to backend/ERPNext (optional)
 * This can be used to sync visitor data with your backend
 */
export async function sendVisitorDataToBackend(data: VisitorData): Promise<void> {
  try {
    // This would send to your backend API
    // For now, we'll just log it
    console.log('Visitor tracked:', data);
    
    // Uncomment below to send to ERPNext or your backend
    /*
    const ERP_API_URL = import.meta.env.VITE_ERP_API_URL || 'https://erp.jsrspaces.com/api';
    const ERP_API_KEY = import.meta.env.VITE_ERP_API_KEY;
    
    if (ERP_API_URL && ERP_API_KEY) {
      await fetch(`${ERP_API_URL}/method/website.visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `token ${ERP_API_KEY}`,
        },
        body: JSON.stringify({
          visitor_id: data.visitorId,
          first_visit: data.firstVisit,
          last_visit: data.lastVisit,
          visit_count: data.visitCount,
          is_new_visitor: data.isNewVisitor,
        }),
      });
    }
    */
  } catch (error) {
    console.error('Failed to send visitor data to backend:', error);
  }
}

