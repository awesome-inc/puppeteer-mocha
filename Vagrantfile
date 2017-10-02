# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  # always use Vagrants insecure key
  config.ssh.insert_key = false

  config.vm.box = 'bento/ubuntu-16.04'

  # just in case there is a HTTP_PROXY configured for the host
  # system, the virtual machine is going to use it
  if ENV.key?('http_proxy')
    if Vagrant.has_plugin?('vagrant-proxyconf')
      config.proxy.http = ENV['http_proxy']
      config.proxy.https = ENV.fetch('https_proxy') { ENV['http_proxy'] }
      config.proxy.no_proxy = ENV.fetch('no_proxy') { 'localhost,127.0.0.1' }
    else
      print "  WARN: Missing plugin 'vagrant-proxyconf'.\n"
      print "  Use 'vagrant plugin install vagrant-proxyconf' to install.\n"
      print "  You might need to set http_proxy to do this, however.\n"
    end
  end

  # lets check for the plugins which make sense or are used
  if Vagrant.has_plugin?('vagrant-cachier')
    # enable package caches
    # machine scope, cf.: http://fgrehm.viewdocs.io/vagrant-cachier/usage/
    config.cache.scope = :machine
  else
    print "  WARN: Missing plugin 'vagrant-cachier'.\n"
    print "  Use 'vagrant plugin install vagrant-cachier' to install.\n"
  end

  config.vbguest.auto_update = false if Vagrant.has_plugin?('vagrant-vbguest')

  unless Vagrant.has_plugin?('vagrant-docker-compose')
    print "  WARN: Missing plugin 'vagrant-docker-compose'.\n"
    print "  Use 'vagrant plugin install vagrant-docker-compose' to install.\n"
  end

  # workaround tty issues on ubuntu
  # https://github.com/mitchellh/vagrant/issues/1673#issuecomment-211568829
  config.vm.provision 'fix-no-tty', type: 'shell' do |s|
    s.privileged = false
    s.inline = "sudo sed -i '/tty/!s/mesg n/tty -s \\&\\& mesg n/' /root/.profile"
  end

  config.vm.provision :docker
  config.vm.provision :docker_compose, yml: '/vagrant/docker-compose.yml'
end
