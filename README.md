# www-chainsaw-master
Chainsaw master website

To add chainsaw master to an existing vps setup:
```
cd ~
git clone git@github.com:mangelozzi/chainsawmaster.co.za.git chainsawmaster.co.za

# Symlink Nginx setup
sudo ln -s /home/nanocube/chainsawmaster.co.za/conf/nginx/chainsawmaster.co.za.conf /etc/nginx/conf.d/chainsawmaster.co.za.conf
sudo chown nanocube:www-data /home/nanocube/chainsawmaster.co.za/conf/nginx/chainsawmaster.co.za.conf
sudo chown -h nanocube:www-data  /etc/nginx/conf.d/chainsawmaster.co.za.conf 

# Setup SSL
# Ensure using python3 venv
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d chainsawmaster.co.za -d www.chainsawmaster.co.za

# Done!
```
