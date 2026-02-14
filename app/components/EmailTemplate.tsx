
interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export function EmailTemplate({ 
  name, 
  email, 
  phone, 
  serviceType, 
  message 
}: EmailTemplateProps) {
  const currentDate = new Date().toLocaleString('en-US', { 
    dateStyle: 'full', 
    timeStyle: 'short' 
  });

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{
        fontFamily: "'Arial', sans-serif",
        lineHeight: '1.6',
        color: '#333',
        margin: '0',
        padding: '0',
        backgroundColor: '#f4f4f4'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '20px auto',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#ffffff',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h1 style={{
              margin: '0',
              fontSize: '24px',
              fontWeight: '600'
            }}>
              📩 New Contact Form Submission
            </h1>
          </div>
          
          {/* Body */}
          <div style={{ padding: '30px' }}>
            <p style={{ 
              fontSize: '16px', 
              marginBottom: '25px' 
            }}>
              You have received a new inquiry from your website.
            </p>

            {/* Service Type */}
            <div style={{ marginBottom: '25px' }}>
              <div style={{
                fontWeight: '600',
                color: '#667eea',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '5px'
              }}>
                Service Requested
              </div>
              <div style={{
                fontSize: '16px',
                color: '#333',
                padding: '10px',
                backgroundColor: '#f8f9fa',
                borderLeft: '3px solid #667eea',
                borderRadius: '4px'
              }}>
                <span style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  backgroundColor: '#667eea',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '500'
                }}>
                  {serviceType}
                </span>
              </div>
            </div>

            {/* Name */}
            <div style={{ marginBottom: '25px' }}>
              <div style={{
                fontWeight: '600',
                color: '#667eea',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '5px'
              }}>
                Full Name
              </div>
              <div style={{
                fontSize: '16px',
                color: '#333',
                padding: '10px',
                backgroundColor: '#f8f9fa',
                borderLeft: '3px solid #667eea',
                borderRadius: '4px'
              }}>
                {name}
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: '25px' }}>
              <div style={{
                fontWeight: '600',
                color: '#667eea',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '5px'
              }}>
                Email Address
              </div>
              <div style={{
                fontSize: '16px',
                color: '#333',
                padding: '10px',
                backgroundColor: '#f8f9fa',
                borderLeft: '3px solid #667eea',
                borderRadius: '4px'
              }}>
                <a href={`mailto:${email}`} style={{
                  color: '#667eea',
                  textDecoration: 'none'
                }}>
                  {email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '25px' }}>
              <div style={{
                fontWeight: '600',
                color: '#667eea',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '5px'
              }}>
                Phone Number
              </div>
              <div style={{
                fontSize: '16px',
                color: '#333',
                padding: '10px',
                backgroundColor: '#f8f9fa',
                borderLeft: '3px solid #667eea',
                borderRadius: '4px'
              }}>
                <a href={`tel:${phone}`} style={{
                  color: '#667eea',
                  textDecoration: 'none'
                }}>
                  {phone}
                </a>
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '25px' }}>
              <div style={{
                fontWeight: '600',
                color: '#667eea',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '5px'
              }}>
                Message
              </div>
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '6px',
                borderLeft: '3px solid #667eea',
                marginTop: '10px',
                fontSize: '16px',
                color: '#333',
                whiteSpace: 'pre-wrap'
              }}>
                {message}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#666',
            borderTop: '1px solid #e0e0e0'
          }}>
            <p style={{ margin: '5px 0' }}>
              This email was sent from your website contact form
            </p>
            <p style={{ 
              margin: '5px 0', 
              color: '#999' 
            }}>
              Received on {currentDate}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}