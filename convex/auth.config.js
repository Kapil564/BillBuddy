



export default {
  providers: [
  {
    // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
    domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
    applicationID: "convex"
  }]

};