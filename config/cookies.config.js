//Function to accept cookies if they are visible

export async function acceptCookiesIfPresent(page){
    const accept = page.getByRole('button', { name: /Accept all/i});
 try {
    await accept.waitFor({ state: 'visible', timeout: 5000 });
    await accept.click();
  } catch {
    
  }
}