loop do

    print 'Enter product id: '
    id = gets.chomp

    print 'Enter amout (how much items you want to order): '
    n = gets.chomp.to_i

    x = hh[id].to_i # read hash value, 0 if not exist
    x = x + n       # increase by n    
    hh[id] = x      # set hash value

    total = 0
    hh.each do |key, value|
        puts total = total + value
    end

    # puts total variable
    puts 'Total items in cart: #{total}'
    puts hh.inspect
    puts '================'

end    