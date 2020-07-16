import {colors} from "./index.js";                                  
                                                                    
console.log(colors.stylize('Color test', 'brightYellow'))           
                                                                    
console.log(colors.trap('TRAP TEST'));                              
console.log(colors.zebra('ZEBRA test'));                            
console.log(colors.random('Random test'));                          
console.log(colors.rainbow('Rainbow test'));                        
console.log(colors.america('America test'));                        
                                                                    
console.log(colors.theme('Error theme test','error'));              
console.log(colors.theme('Warning theme test','warn'));             
                                                                    
colors.setTheme.testTheme=['brightCyan','italic','magentaBG'];      
                                                                    
console.log(colors.theme('User theme test', 'testTheme'));          
